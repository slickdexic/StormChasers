const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const GameRoom = require('./models/GameRoom');
const Player = require('./models/Player');
const GameState = require('./models/GameState');

const app = express();
const server = http.createServer(app);

// Configure CORS for Express
app.use(cors({
  origin: "http://localhost:3500",
  credentials: true
}));

app.use(express.json());

// Configure Socket.IO with CORS
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3500",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Game state storage
const gameRooms = new Map();
const playerSockets = new Map();

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    activeRooms: gameRooms.size,
    connectedPlayers: playerSockets.size
  });
});

// Get all active rooms
app.get('/api/rooms', (req, res) => {
  const roomList = Array.from(gameRooms.values()).map(room => ({
    id: room.id,
    name: room.name,
    hostName: room.host?.name || 'Unknown',
    playerCount: room.players.length,
    maxPlayers: 4,
    status: room.gameState.currentStage,
    settings: room.settings,
    canJoin: room.players.length < 4 && room.gameState.currentStage === 'lobby'
  }));
  
  res.json(roomList);
});

io.on('connection', (socket) => {
  console.log(`Player connected: ${socket.id}`);

  // Handle player joining the lobby
  socket.on('join-lobby', (playerData) => {
    const player = new Player(socket.id, playerData.name); // No color assigned yet
    playerSockets.set(socket.id, player);
    
    socket.emit('lobby-joined', { 
      playerId: socket.id,
      player: player.toJSON()
    });

    // Send current room list
    broadcastRoomList();
  });

  // Handle room creation
  socket.on('create-room', (roomData) => {
    const player = playerSockets.get(socket.id);
    if (!player) {
      socket.emit('error', { message: 'Player not found. Please rejoin the lobby.' });
      return;
    }

    const roomId = uuidv4();
    const room = new GameRoom(roomId, roomData.name, player, roomData.settings);
    
    gameRooms.set(roomId, room);
    socket.join(roomId);
    
    // Update player's room
    player.roomId = roomId;
    
    socket.emit('room-created', {
      roomId: roomId,
      room: room.toJSON()
    });

    // Broadcast updated room list to lobby
    broadcastRoomList();
    
    console.log(`Room created: ${roomData.name} (${roomId}) by ${player.name}`);
  });

  // Handle joining a room
  socket.on('join-room', (data) => {
    const { roomId } = data;
    const player = playerSockets.get(socket.id);
    
    if (!player) {
      socket.emit('error', { message: 'Player not found. Please rejoin the lobby.' });
      return;
    }

    const room = gameRooms.get(roomId);
    if (!room) {
      socket.emit('error', { message: 'Room not found.' });
      return;
    }

    if (room.players.length >= 4) {
      socket.emit('error', { message: 'Room is full.' });
      return;
    }

    if (room.gameState.currentStage !== 'lobby') {
      socket.emit('error', { message: 'Game has already started.' });
      return;
    }

    // Add player to room
    const success = room.addPlayer(player);
    if (success) {
      socket.join(roomId);
      player.roomId = roomId;
      
      // Send room-joined event to the joining player
      socket.emit('room-joined', {
        roomId: roomId,
        room: room.toJSON()
      });
      
      // Notify other players in the room about the new player
      socket.to(roomId).emit('player-joined', {
        player: player.toJSON(),
        room: room.toJSON()
      });

      // Broadcast updated room list to lobby
      broadcastRoomList();
      
      console.log(`${player.name} joined room: ${room.name}`);
    } else {
      socket.emit('error', { message: 'Failed to join room.' });
    }
  });

  // Handle leaving a room
  socket.on('leave-room', () => {
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) return;

    const room = gameRooms.get(player.roomId);
    if (room) {
      room.removePlayer(socket.id);
      socket.leave(player.roomId);
      
      // Notify remaining players
      io.to(player.roomId).emit('player-left', {
        playerId: socket.id,
        room: room.toJSON()
      });

      // If room is empty, delete it
      if (room.players.length === 0) {
        gameRooms.delete(player.roomId);
        console.log(`Room deleted: ${room.name} (${player.roomId})`);
      }

      player.roomId = null;
      broadcastRoomList();
    }
  });

  // Handle room chat
  socket.on('room-chat', (data) => {
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) return;

    const message = {
      id: uuidv4(),
      playerId: socket.id,
      playerName: player.name,
      message: data.message,
      timestamp: new Date().toISOString(),
      type: 'room'
    };

    io.to(player.roomId).emit('chat-message', message);
  });

  // Handle private message
  socket.on('private-message', (data) => {
    const player = playerSockets.get(socket.id);
    if (!player) return;

    const targetSocket = playerSockets.get(data.targetPlayerId);
    if (!targetSocket) return;

    const message = {
      id: uuidv4(),
      playerId: socket.id,
      playerName: player.name,
      message: data.message,
      timestamp: new Date().toISOString(),
      type: 'private'
    };

    // Send to both sender and recipient
    socket.emit('chat-message', message);
    io.to(data.targetPlayerId).emit('chat-message', message);
  });

  // Handle player color change
  socket.on('change-color', (data) => {
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) return;

    const room = gameRooms.get(player.roomId);
    if (!room) return;

    // Check if color is available
    const colorTaken = room.players.some(p => p.id !== socket.id && p.color === data.color);
    if (colorTaken) {
      socket.emit('error', { message: 'Color already taken.' });
      return;
    }

    player.color = data.color;
    
    // Notify all players in room
    io.to(player.roomId).emit('player-updated', {
      player: player.toJSON(),
      room: room.toJSON()
    });
  });

  // Handle game settings update
  socket.on('update-settings', (newSettings) => {
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) return;

    const room = gameRooms.get(player.roomId);
    if (!room) return;

    // Only host can update settings
    if (room.host.id !== socket.id) {
      socket.emit('error', { message: 'Only the host can update settings.' });
      return;
    }

    // Update room settings
    const success = room.updateSettings(newSettings);
    if (success) {
      io.to(player.roomId).emit('room-updated', {
        room: room.toJSON()
      });
      console.log(`Settings updated in room: ${room.name}`);
    } else {
      socket.emit('error', { message: 'Failed to update settings.' });
    }
  });

  // Handle game start
  socket.on('start-game', () => {
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) return;

    const room = gameRooms.get(player.roomId);
    if (!room) return;

    // Only host can start the game
    if (room.host.id !== socket.id) {
      socket.emit('error', { message: 'Only the host can start the game.' });
      return;
    }

    if (room.players.length < 2) {
      socket.emit('error', { message: 'Need at least 2 players to start.' });
      return;
    }

    // Start the game
    room.startGame();
    
    io.to(player.roomId).emit('game-started', {
      room: room.toJSON()
    });

    broadcastRoomList();
    
    console.log(`Game started in room: ${room.name}`);
  });

  // Handle continue to storm (after dealer selection)
  socket.on('continue-to-storm', () => {
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) return;

    const room = gameRooms.get(player.roomId);
    if (!room) return;

    // Only host can continue
    if (room.host.id !== socket.id) {
      socket.emit('error', { message: 'Only the host can continue.' });
      return;
    }

    // Must be in dealer-selection stage with dealer determined, OR already in storm stage
    if (room.gameState.currentStage !== 'dealer-selection' && room.gameState.currentStage !== 'storm') {
      socket.emit('error', { message: 'Not in correct stage for storm continuation.' });
      return;
    }

    const dealerExists = room.players.some(p => p.dealerButton);
    if (!dealerExists) {
      socket.emit('error', { message: 'Dealer not yet determined.' });
      return;
    }
    
    // Only advance if not already in storm stage
    if (room.gameState.currentStage === 'dealer-selection') {
      room.advanceToNextStage();
      
      // Start animated card dealing after stage setup
      setTimeout(() => {
        room.startAnimatedCardDealing(io, playerSockets);
      }, 500); // Small delay for better UX
    }

    console.log(`Storm stage started in room: ${room.name}`);
  });

  // Handle dealer card selection
  socket.on('select-dealer-card', (data) => {
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) return;

    const room = gameRooms.get(player.roomId);
    if (!room) return;

    if (room.gameState.currentStage !== 'dealer-selection') {
      socket.emit('error', { message: 'Not in dealer selection stage' });
      return;
    }

    const result = room.selectDealerCard(socket.id, data.cardIndex);
    
    if (result.success) {
      io.to(player.roomId).emit('dealer-card-selected', {
        playerId: socket.id,
        cardIndex: data.cardIndex,
        card: result.card,
        room: room.toJSON()
      });

      if (result.dealer) {
        io.to(player.roomId).emit('dealer-determined', {
          dealer: result.dealer,
          room: room.toJSON()
        });
      } else if (result.tie) {
        io.to(player.roomId).emit('dealer-selection-tie', {
          tiedPlayers: result.tiedPlayers,
          message: result.message,
          room: room.toJSON()
        });
      }
    } else {
      socket.emit('error', { message: result.message });
    }
  });

  // Handle Storm stage card play
  socket.on('play-card', (data) => {
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) return;

    const room = gameRooms.get(player.roomId);
    if (!room) return;

    if (room.gameState.currentStage !== 'storm') {
      socket.emit('error', { message: 'Not in storm stage' });
      return;
    }

    const result = room.playCard(socket.id, data.cardId, data.calledSuit);
    
    if (result.success) {
      io.to(player.roomId).emit('card-played', {
        playerId: socket.id,
        card: result.card,
        calledSuit: data.calledSuit,
        room: room.toJSON()
      });

      // Check if player finished Storm stage
      const currentPlayer = room.getPlayer(socket.id);
      if (currentPlayer && currentPlayer.hasFinishedStorm()) {
        io.to(player.roomId).emit('player-finished-storm', {
          playerId: socket.id,
          finishOrder: currentPlayer.stormFinishOrder,
          room: room.toJSON()
        });
      }

      // Check if Storm stage is complete
      const allFinished = room.players.every(p => p.stormFinishOrder !== null);
      if (allFinished) {
        io.to(player.roomId).emit('storm-stage-complete', {
          results: room.players.map(p => ({
            playerId: p.id,
            playerName: p.name,
            finishOrder: p.stormFinishOrder
          })),
          room: room.toJSON()
        });
      }
    } else {
      socket.emit('error', { message: result.message });
    }
  });

  // Handle Storm stage card draw
  socket.on('draw-cards', (data) => {
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) return;

    const room = gameRooms.get(player.roomId);
    if (!room) return;

    if (room.gameState.currentStage !== 'storm') {
      socket.emit('error', { message: 'Not in storm stage' });
      return;
    }

    if (!player.isActive) {
      socket.emit('error', { message: 'Not your turn' });
      return;
    }

    // Calculate cards to draw (for toxic sevens)
    const cardsToDraw = data.count || (room.gameState.toxicSevenCount * 2) || 1;
    const drawnCards = room.gameState.drawCards(cardsToDraw);
    
    player.addCards(drawnCards);
    
    // Reset toxic seven count
    room.gameState.toxicSevenCount = 0;
    
    // Advance to next player
    room.advanceToNextPlayer();
    
    io.to(player.roomId).emit('cards-drawn', {
      playerId: socket.id,
      cardCount: drawnCards.length,
      room: room.toJSON()
    });
  });

  // Handle lane selection
  socket.on('select-lane', (data) => {
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) return;

    const room = gameRooms.get(player.roomId);
    if (!room) return;

    if (room.gameState.currentStage !== 'lane-selection') {
      socket.emit('error', { message: 'Not in lane selection stage' });
      return;
    }

    if (!player.isActive) {
      socket.emit('error', { message: 'Not your turn' });
      return;
    }

    // Validate lane selection
    if (data.lane < 1 || data.lane > 4) {
      socket.emit('error', { message: 'Invalid lane selection' });
      return;
    }

    // Check if lane is available
    const laneOccupied = room.players.some(p => p.lane === data.lane && p.id !== socket.id);
    if (laneOccupied) {
      socket.emit('error', { message: 'Lane already selected' });
      return;
    }

    // Set player's lane
    player.lane = data.lane;
    room.gameState.setPlayerLane(socket.id, data.lane);
    
    // Advance to next player
    room.advanceToNextPlayer();
    
    io.to(player.roomId).emit('lane-selected', {
      playerId: socket.id,
      lane: data.lane,
      room: room.toJSON()
    });

    // Check if all players selected lanes
    const allSelected = room.players.every(p => p.lane !== null);
    if (allSelected) {
      room.advanceToNextStage(); // to coin stage
      io.to(player.roomId).emit('lane-selection-complete', {
        room: room.toJSON()
      });
    }
  });

  // Handle coin placement
  socket.on('place-coin', (data) => {
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) return;

    const room = gameRooms.get(player.roomId);
    if (!room) return;

    if (room.gameState.currentStage !== 'coin') {
      socket.emit('error', { message: 'Not in coin stage' });
      return;
    }

    if (!player.isActive) {
      socket.emit('error', { message: 'Not your turn' });
      return;
    }

    // Validate coin placement
    const coin = player.placeCoin(data.coinId);
    if (!coin) {
      socket.emit('error', { message: 'Coin not found' });
      return;
    }

    // Place coin on track
    room.gameState.placedCoins.set(data.position, coin);
    
    io.to(player.roomId).emit('coin-placed', {
      playerId: socket.id,
      coinId: data.coinId,
      position: data.position,
      room: room.toJSON()
    });

    // Check if player has placed all coins
    if (player.drawnCoins.length === 0) {
      // Advance to next player
      room.advanceToNextPlayer();
      
      // Check if all players placed all coins
      const allPlaced = room.players.every(p => p.drawnCoins.length === 0);
      if (allPlaced) {
        room.advanceToNextStage(); // to racing stage
        io.to(player.roomId).emit('coin-stage-complete', {
          room: room.toJSON()
        });
      }
    }
  });

  // Handle continue to next stage (host only)
  socket.on('continue-to-next-stage', () => {
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) return;

    const room = gameRooms.get(player.roomId);
    if (!room) return;

    // Only host can continue
    if (room.host.id !== socket.id) {
      socket.emit('error', { message: 'Only the host can continue' });
      return;
    }

    room.advanceToNextStage();
    
    io.to(player.roomId).emit('stage-advanced', {
      room: room.toJSON()
    });
  });

  // Handle player disconnect
  socket.on('disconnect', () => {
    console.log(`Player disconnected: ${socket.id}`);
    
    const player = playerSockets.get(socket.id);
    if (player && player.roomId) {
      const room = gameRooms.get(player.roomId);
      if (room) {
        room.removePlayer(socket.id);
        
        // Notify remaining players
        io.to(player.roomId).emit('player-left', {
          playerId: socket.id,
          room: room.toJSON()
        });

        // If room is empty, delete it
        if (room.players.length === 0) {
          gameRooms.delete(player.roomId);
          console.log(`Room deleted: ${room.name} (${player.roomId})`);
        }

        broadcastRoomList();
      }
    }
    
    playerSockets.delete(socket.id);
  });

  function broadcastRoomList() {
    const roomList = Array.from(gameRooms.values()).map(room => ({
      id: room.id,
      name: room.name,
      hostName: room.host?.name || 'Unknown',
      playerCount: room.players.length,
      maxPlayers: 4,
      status: room.gameState.currentStage,
      settings: room.settings,
      canJoin: room.players.length < 4 && room.gameState.currentStage === 'lobby'
    }));
    
    io.emit('room-list-updated', roomList);
  }
});

const PORT = process.env.PORT || 3501;
console.log('Starting Havoc Speedway server...');
server.listen(PORT, () => {
  console.log(`Havoc Speedway server running on port ${PORT}`);
});

module.exports = { app, server, io };
