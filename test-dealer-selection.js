const io = require('socket.io-client');

// Test dealer selection functionality
const socket1 = io('http://localhost:3501');
const socket2 = io('http://localhost:3501');

socket1.on('connect', () => {
  console.log('Host connected:', socket1.id);
  socket1.emit('join-lobby', { name: 'TestHost' });
});

socket2.on('connect', () => {
  console.log('Player connected:', socket2.id);
  socket2.emit('join-lobby', { name: 'TestPlayer' });
});

socket1.on('lobby-joined', (data) => {
  console.log('Host joined lobby');
  socket1.emit('create-room', { 
    name: 'Dealer Test Room',
    maxPlayers: 4,
    numberOfLaps: 3 
  });
});

socket2.on('lobby-joined', (data) => {
  console.log('Player joined lobby');
  setTimeout(() => {
    socket2.emit('join-room', { roomId: testRoomId });
  }, 1000);
});

let testRoomId = null;

socket1.on('room-created', (data) => {
  console.log('Room created:', data.room.id);
  testRoomId = data.room.id;
});

socket2.on('room-joined', (data) => {
  console.log('Player joined room');
  
  setTimeout(() => {
    console.log('Host starting game...');
    socket1.emit('start-game');
  }, 1000);
});

socket1.on('game-started', (data) => {
  console.log('✅ Game started!');
  console.log('Current stage:', data.room.gameState.currentStage);
  console.log('Current player index:', data.room.gameState.currentPlayerIndex);
  console.log('Current player ID:', data.room.gameState.currentPlayer);
  console.log('Players:', data.room.players.map(p => ({ id: p.id, name: p.name })));
  console.log('Dealer cards available:', data.room.gameState.dealerSelectionCards?.length);
  
  // Test dealer card selection
  if (data.room.gameState.currentPlayer === socket1.id) {
    console.log('Host selecting dealer card...');
    socket1.emit('select-dealer-card', { cardIndex: 0 });
  }
});

socket2.on('game-started', (data) => {
  console.log('✅ Player received game-started');
  console.log('Current player ID:', data.room.gameState.currentPlayer);
  console.log('Am I current player?', data.room.gameState.currentPlayer === socket2.id);
});

socket1.on('dealer-card-selected', (data) => {
  console.log('Host: Dealer card selected result:', data);
});

socket2.on('dealer-card-selected', (data) => {
  console.log('Player: Dealer card selected result:', data);
  
  // If it's now player's turn, select a card
  if (data.room.gameState.currentPlayer === socket2.id) {
    console.log('Player selecting dealer card...');
    socket2.emit('select-dealer-card', { cardIndex: 5 });
  }
});

socket1.on('dealer-determined', (data) => {
  console.log('✅ Dealer determined:', data);
  process.exit(0);
});

socket2.on('dealer-determined', (data) => {
  console.log('✅ Player received dealer result:', data);
});

socket1.on('error', (error) => {
  console.log('❌ Host error:', error);
});

socket2.on('error', (error) => {
  console.log('❌ Player error:', error);
});

// Timeout
setTimeout(() => {
  console.log('❌ Test timed out');
  process.exit(1);
}, 15000);
