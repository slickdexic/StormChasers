const io = require('socket.io-client');

// Test dealer selection functionality with detailed card debugging
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
    name: 'Debug Test Room',
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

function printCardDetails(cards, playerName) {
  console.log(`\n🎴 ${playerName} sees cards:`);
  cards.forEach((card, i) => {
    if (card.isFlipped) {
      console.log(`  Card ${i}: ${card.rank} of ${card.suit} (FLIPPED)`);
    } else {
      console.log(`  Card ${i}: [FACE DOWN] (id: ${card.id})`);
    }
  });
  console.log('');
}

socket1.on('game-started', (data) => {
  console.log('✅ Host: Game started!');
  printCardDetails(data.room.gameState.dealerSelectionCards, 'Host');
  
  if (data.room.gameState.activePlayerId === socket1.id) {
    console.log('Host selecting dealer card index 0...');
    socket1.emit('select-dealer-card', { cardIndex: 0 });
  }
});

socket2.on('game-started', (data) => {
  console.log('✅ Player: Game started!');
  printCardDetails(data.room.gameState.dealerSelectionCards, 'Player');
});

socket1.on('dealer-card-selected', (data) => {
  console.log(`\n🎯 Host received: Player ${data.playerId} selected card ${data.cardIndex}`);
  if (data.card) {
    console.log(`   Card details: ${data.card.rank} of ${data.card.suit}`);
  }
  printCardDetails(data.room.gameState.dealerSelectionCards, 'Host after selection');
});

socket2.on('dealer-card-selected', (data) => {
  console.log(`\n🎯 Player received: Player ${data.playerId} selected card ${data.cardIndex}`);
  if (data.card) {
    console.log(`   Card details: ${data.card.rank} of ${data.card.suit}`);
  }
  printCardDetails(data.room.gameState.dealerSelectionCards, 'Player after selection');
  
  // If it's now player's turn, select a card
  if (data.room.gameState.activePlayerId === socket2.id) {
    console.log('Player selecting dealer card index 5...');
    socket2.emit('select-dealer-card', { cardIndex: 5 });
  }
});

socket1.on('dealer-determined', (data) => {
  console.log('✅ Host: Dealer determined:', data.dealer.name);
  process.exit(0);
});

socket2.on('dealer-determined', (data) => {
  console.log('✅ Player: Dealer determined:', data.dealer.name);
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
}, 10000);
