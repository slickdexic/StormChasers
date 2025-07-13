const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

// Basic setup without custom modules for now
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

// Simple in-memory storage for testing
const gameRooms = new Map();
const playerSockets = new Map();

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    message: 'Havoc Speedway Server Running!',
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
    playerCount: room.players?.length || 0,
    maxPlayers: 4,
    status: 'Waiting to start',
    canJoin: true
  }));
  
  res.json(roomList);
});

io.on('connection', (socket) => {
  console.log(`🎮 Player connected: ${socket.id}`);

  socket.on('join-lobby', (playerData) => {
    const player = {
      id: socket.id,
      name: playerData.name,
      color: playerData.color
    };
    
    playerSockets.set(socket.id, player);
    
    socket.emit('lobby-joined', { 
      playerId: socket.id,
      player: player
    });

    console.log(`✅ ${player.name} joined the lobby`);
    
    // Send current room list
    broadcastRoomList();
  });

  socket.on('create-room', (roomData) => {
    const player = playerSockets.get(socket.id);
    if (!player) {
      socket.emit('error', { message: 'Player not found. Please rejoin the lobby.' });
      return;
    }

    const roomId = uuidv4();
    const room = {
      id: roomId,
      name: roomData.name,
      host: player,
      players: [player],
      settings: roomData.settings || {},
      createdAt: new Date()
    };
    
    gameRooms.set(roomId, room);
    socket.join(roomId);
    
    player.roomId = roomId;
    
    socket.emit('room-created', {
      roomId: roomId,
      room: room
    });

    broadcastRoomList();
    
    console.log(`🏁 Room created: ${roomData.name} by ${player.name}`);
  });

  socket.on('disconnect', () => {
    console.log(`👋 Player disconnected: ${socket.id}`);
    
    const player = playerSockets.get(socket.id);
    if (player) {
      playerSockets.delete(socket.id);
      
      // Clean up any rooms if needed
      if (player.roomId) {
        const room = gameRooms.get(player.roomId);
        if (room) {
          room.players = room.players.filter(p => p.id !== socket.id);
          if (room.players.length === 0) {
            gameRooms.delete(player.roomId);
            console.log(`🗑️ Room deleted: ${room.name}`);
          }
          broadcastRoomList();
        }
      }
    }
  });

  function broadcastRoomList() {
    const roomList = Array.from(gameRooms.values()).map(room => ({
      id: room.id,
      name: room.name,
      hostName: room.host?.name || 'Unknown',
      playerCount: room.players?.length || 0,
      maxPlayers: 4,
      status: 'Waiting to start',
      canJoin: true
    }));
    
    io.emit('room-list-updated', roomList);
  }
});

const PORT = process.env.PORT || 3501;
server.listen(PORT, () => {
  console.log('🏁=================================🏁');
  console.log('   HAVOC SPEEDWAY SERVER STARTED   ');
  console.log('🏁=================================🏁');
  console.log(`🌐 Server running on port ${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
  console.log(`🎮 Ready for racers!`);
  console.log('');
});

module.exports = { app, server, io };
