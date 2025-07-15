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

    // Pass the player's socket ID as hostId for validation
    const success = room.updateSettings(newSettings, socket.id);
    if (success) {
      io.to(player.roomId).emit('room-updated', {
        room: room.toJSON()
      });
      console.log(`Settings updated in room: ${room.name}`);
    } else {
      socket.emit('error', { message: 'Only the host can update settings, or invalid settings provided.' });
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
    console.log(`🌊 Continue to storm requested by ${socket.id}`);
    
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) {
      console.log(`❌ Player ${socket.id} not in a room`);
      return;
    }

    const room = gameRooms.get(player.roomId);
    if (!room) {
      console.log(`❌ Room ${player.roomId} not found`);
      return;
    }

    // Only host can continue
    if (room.host.id !== socket.id) {
      console.log(`❌ Player ${socket.id} is not the host`);
      socket.emit('error', { message: 'Only the host can continue.' });
      return;
    }

    // Must be in dealer-selection stage with dealer determined, OR already in storm stage
    if (room.gameState.currentStage !== 'dealer-selection' && room.gameState.currentStage !== 'storm') {
      console.log(`❌ Invalid stage for continue-to-storm: ${room.gameState.currentStage}`);
      socket.emit('error', { message: 'Not in correct stage for storm continuation.' });
      return;
    }

    const dealerExists = room.players.some(p => p.dealerButton);
    if (!dealerExists) {
      console.log(`❌ Dealer not yet determined in room ${room.id}`);
      socket.emit('error', { message: 'Dealer not yet determined.' });
      return;
    }
    
    // Only advance if not already in storm stage
    if (room.gameState.currentStage === 'dealer-selection') {
      console.log(`🎯 Advancing to storm stage in room ${room.id}`);
      room.advanceToNextStage();
      
      // Deal cards and start storm immediately
      room.dealCardsAndStartStorm(io, playerSockets);
    }

    console.log(`✅ Storm stage started in room: ${room.name}`);
  });

  // Handle continue to next stage after Storm results
  socket.on('continue-to-next-stage', () => {
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) return;

    const room = gameRooms.get(player.roomId);
    if (!room) return;

    // Only host can continue
    if (room.host.id !== socket.id) {
      socket.emit('error', { message: 'Only the host can continue.' });
      return;
    }

    // Must be in storm stage with storm complete
    if (room.gameState.currentStage !== 'storm' || !room.gameState.stormComplete) {
      socket.emit('error', { message: 'Storm stage not complete yet.' });
      return;
    }

    console.log(`🎯 Host continuing to next stage after Storm results`);

    console.log(`🎯 Storm completed for room ${player.roomId}. Current stormRound: ${room.gameState.stormRound}`);
    
    // Reset storm complete flag
    room.gameState.stormComplete = false;

    // Advance to next stage using GameState logic
    console.log(`🔄 Current stage before advancement: ${room.gameState.currentStage}`);
    room.advanceToNextStage();
    console.log(`🔄 Stage after advancement: ${room.gameState.currentStage}`);

    // Send updated room data to all players
    room.players.forEach(roomPlayer => {
      const playerSocket = [...playerSockets.entries()].find(([socketId, data]) => data.id === roomPlayer.id);
      if (playerSocket) {
        io.to(playerSocket[0]).emit('stage-advanced', {
          room: room.toDetailedJSON(roomPlayer.id)
        });
      }
    });

    console.log(`Advanced to ${room.gameState.currentStage} stage in room: ${room.name}`);
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

    console.log(`🎮 Received play-card event:`, data);
    
    const result = room.playCard(socket.id, data.cardId, data.calledSuit);
    
    console.log(`🎯 PlayCard result:`, result);
    
    if (result.success) {
      // Send updated room data to each player with their personal data
      room.players.forEach(roomPlayer => {
        const playerSocket = [...playerSockets.entries()].find(([socketId, data]) => data.id === roomPlayer.id);
        if (playerSocket) {
          io.to(playerSocket[0]).emit('card-played', {
            playerId: socket.id,
            card: result.card,
            calledSuit: data.calledSuit,
            room: room.toDetailedJSON(roomPlayer.id)
          });
        }
      });

      // Check if Storm stage is complete
      if (result.stormComplete && result.showResults) {
        console.log(`🎯 Storm stage complete! Sending results to all players.`);
        io.to(player.roomId).emit('storm-stage-complete', {
          results: room.players
            .sort((a, b) => a.stormFinishOrder - b.stormFinishOrder)
            .map(p => ({
              playerId: p.id,
              playerName: p.name,
              finishOrder: p.stormFinishOrder,
              cardCount: p.cards.length
            })),
          room: room.toJSON()
        });
      } else if (result.playerFinished) {
        // A player finished but game continues - just update the badges
        console.log(`🏆 Player finished but Storm continues`);
        const finishedPlayer = room.getPlayer(socket.id);
        io.to(player.roomId).emit('player-finished-storm', {
          playerId: socket.id,
          playerName: finishedPlayer.name,
          finishOrder: finishedPlayer.stormFinishOrder,
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

    console.log(`🎮 Received draw-cards event:`, data);

    // Use GameRoom's drawCards method for proper handling
    const result = room.drawCards(socket.id, data.count);
    
    console.log(`🎯 DrawCards result:`, result);
    
    if (!result.success) {
      console.log(`❌ Draw cards failed: ${result.message}`);
      socket.emit('error', { message: result.message });
      return;
    }
    
    console.log(`✅ Cards drawn successfully, sending updates to all players`);
    
    // Send updated room data to each player with their personal data
    room.players.forEach(roomPlayer => {
      const playerSocket = [...playerSockets.entries()].find(([socketId, data]) => data.id === roomPlayer.id);
      if (playerSocket) {
        io.to(playerSocket[0]).emit('cards-drawn', {
          playerId: socket.id,
          cardCount: result.cardCount,
          room: room.toDetailedJSON(roomPlayer.id)
        });
      }
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
    const laneOccupied = room.players.some(p => p.lane === data.lane && p.id !== player.id);
    if (laneOccupied) {
      socket.emit('error', { message: 'Lane already selected' });
      return;
    }

    // Set player's lane
    player.lane = data.lane;
    room.gameState.setPlayerLane(player.id, data.lane);
    
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
      console.log(`🔄 Current stage before advancement: ${room.gameState.currentStage}`);
      room.advanceToNextStage(); // to coin stage
      console.log(`🔄 Stage after advancement: ${room.gameState.currentStage}`);

      // Send updated room data to all players with detailed info
      room.players.forEach(roomPlayer => {
        const playerSocket = [...playerSockets.entries()].find(([socketId, data]) => data.id === roomPlayer.id);
        if (playerSocket) {
          io.to(playerSocket[0]).emit('stage-advanced', {
            room: room.toDetailedJSON(roomPlayer.id)
          });
        }
      });

      console.log(`Advanced to ${room.gameState.currentStage} stage in room: ${room.name}`);
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

    // Place coin on track (use position-lane as key)
    const coinKey = `${data.position}-${data.lane || 1}`;
    room.gameState.placedCoins.set(coinKey, {
      ...coin,
      position: data.position,
      lane: data.lane || 1,
      placedBy: player.id
    });
    
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
        console.log(`🔄 Current stage before advancement: ${room.gameState.currentStage}`);
        room.advanceToNextStage(); // to racing stage
        console.log(`🔄 Stage after advancement: ${room.gameState.currentStage}`);

        // Send updated room data to all players with detailed info
        room.players.forEach(roomPlayer => {
          const playerSocket = [...playerSockets.entries()].find(([socketId, data]) => data.id === roomPlayer.id);
          if (playerSocket) {
            io.to(playerSocket[0]).emit('stage-advanced', {
              room: room.toDetailedJSON(roomPlayer.id)
            });
          }
        });

        console.log(`Advanced to ${room.gameState.currentStage} stage in room: ${room.name}`);
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

  // Handle continue to racing stage (host only)
  socket.on('continue-to-racing', () => {
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) return;

    const room = gameRooms.get(player.roomId);
    if (!room) return;

    // Only host can continue
    if (room.host.id !== socket.id) {
      socket.emit('error', { message: 'Only the host can continue' });
      return;
    }

    // Advance from coin stage to racing stage
    room.gameState.currentStage = 'racing';
    
    io.to(player.roomId).emit('stage-advanced', {
      room: room.toJSON()
    });
  });

  // Racing Stage Socket Handlers
  
  // Handle dice roll
  socket.on('roll-dice', (data) => {
    console.log(`🎲 Player ${socket.id} rolling dice:`, data);
    
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) {
      socket.emit('error', { message: 'Not in a room' });
      return;
    }
    
    const room = gameRooms.get(player.roomId);
    if (!room) {
      socket.emit('error', { message: 'Room not found' });
      return;
    }
    
    if (room.gameState.currentStage !== 'racing') {
      socket.emit('error', { message: 'Not in racing stage' });
      return;
    }
    
    if (!room.isActivePlayer(player.id)) {
      socket.emit('error', { message: 'Not your turn' });
      return;
    }
    
    // Roll dice and handle movement
    const result = room.rollDice(player.id, data.diceType);
    
    if (result.success) {
      // Send dice result to all players in room
      io.to(player.roomId).emit('dice-rolled', {
        playerId: player.id,
        diceType: data.diceType,
        values: result.values,
        room: room.toDetailedJSON(player.id)
      });
      
      // Send personalized room data to each player
      room.players.forEach(roomPlayer => {
        const playerSocket = [...playerSockets.entries()].find(([socketId, data]) => data.id === roomPlayer.id);
        if (playerSocket) {
          io.to(playerSocket[0]).emit('room-updated', {
            room: room.toDetailedJSON(roomPlayer.id)
          });
        }
      });
    } else {
      socket.emit('error', { message: result.error });
    }
  });

  // Handle movement choice (after dice roll)
  socket.on('choose-movement', (data) => {
    console.log(`🚗 Player ${socket.id} choosing movement:`, data);
    
    const player = playerSockets.get(socket.id);
    if (!player || !player.roomId) {
      socket.emit('error', { message: 'Not in a room' });
      return;
    }
    
    const room = gameRooms.get(player.roomId);
    if (!room) {
      socket.emit('error', { message: 'Room not found' });
      return;
    }
    
    if (room.gameState.currentStage !== 'racing') {
      socket.emit('error', { message: 'Not in racing stage' });
      return;
    }
    
    if (!room.isActivePlayer(player.id)) {
      socket.emit('error', { message: 'Not your turn' });
      return;
    }
    
    // Process movement
    const result = room.processMovement(player.id, data);
    
    if (result.success) {
      // Send movement result to all players
      io.to(player.roomId).emit('player-moved', {
        playerId: player.id,
        oldPosition: result.oldPosition,
        newPosition: result.newPosition,
        coinsTriggered: result.coinsTriggered,
        room: room.toJSON()
      });
      
      // Check if player finished race
      if (result.raceComplete) {
        io.to(player.roomId).emit('player-finished-race', {
          playerId: player.id,
          finishOrder: result.finishOrder,
          room: room.toJSON()
        });
      }
      
      // Check if round is complete
      if (result.roundComplete) {
        io.to(player.roomId).emit('race-round-complete', {
          results: result.results,
          room: room.toJSON()
        });
      }
    } else {
      socket.emit('error', { message: result.error });
    }
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

// Only start server if not in test environment
if (process.env.NODE_ENV !== 'test') {
  console.log('Starting Havoc Speedway server...');
  server.listen(PORT, () => {
    console.log(`Havoc Speedway server running on port ${PORT}`);
  });
}

module.exports = { app, server, io };
