const io = require('socket.io-client');

// Test script to debug start-game functionality
const socket1 = io('http://localhost:3501');
const socket2 = io('http://localhost:3501');

socket1.on('connect', () => {
  console.log('Host connected:', socket1.id);
  
  // Join lobby first
  socket1.emit('join-lobby', { name: 'TestHost' });
});

socket2.on('connect', () => {
  console.log('Player connected:', socket2.id);
  
  // Join lobby
  socket2.emit('join-lobby', { name: 'TestPlayer' });
});

socket1.on('lobby-joined', (data) => {
  console.log('Host joined lobby:', data.player.name);
  
  // Create room
  socket1.emit('create-room', { 
    name: 'Start Game Test Room',
    maxPlayers: 4,
    numberOfLaps: 3 
  });
});

socket2.on('lobby-joined', (data) => {
  console.log('Player joined lobby:', data.player.name);
  
  // Wait a bit then join room
  setTimeout(() => {
    socket2.emit('join-room', { roomId: testRoomId });
  }, 1000);
});

let testRoomId = null;

socket1.on('room-created', (data) => {
  console.log('Room created:', data.room.name, data.room.id);
  testRoomId = data.room.id;
});

socket1.on('room-joined', (data) => {
  console.log('Host joined room, players:', data.room.players.length);
});

socket2.on('room-joined', (data) => {
  console.log('Player joined room, players:', data.room.players.length);
  
  // Now try to start the game from host
  setTimeout(() => {
    console.log('Host attempting to start game...');
    socket1.emit('start-game');
  }, 1000);
});

socket1.on('game-started', (data) => {
  console.log('✅ Game started successfully!');
  console.log('Game state:', data.room.gameState.currentStage);
  process.exit(0);
});

socket2.on('game-started', (data) => {
  console.log('✅ Player received game-started event');
  console.log('Game state:', data.room.gameState.currentStage);
});

socket1.on('error', (error) => {
  console.log('❌ Host error:', error);
});

socket2.on('error', (error) => {
  console.log('❌ Player error:', error);
});

// Timeout after 10 seconds
setTimeout(() => {
  console.log('❌ Test timed out');
  process.exit(1);
}, 10000);
