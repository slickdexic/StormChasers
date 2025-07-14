// Quick test to verify the reported bugs
const io = require('socket.io-client');

// Connect two clients
const client1 = io('http://localhost:3501');
const client2 = io('http://localhost:3501');

let roomId;

client1.on('connect', () => {
  console.log('Client 1 connected');
  // Create a room
  client1.emit('create-room', { 
    roomName: 'Bug Test',
    playerName: 'TestPlayer1'
  });
});

client1.on('room-created', (data) => {
  console.log('Room created:', data.room.name);
  roomId = data.room.id;
  
  // Have client 2 join
  client2.emit('join-room', {
    roomId: roomId,
    playerName: 'TestPlayer2'
  });
});

client2.on('room-joined', (data) => {
  console.log('Client 2 joined room');
  
  // Start the game
  setTimeout(() => {
    client1.emit('start-game');
  }, 1000);
});

client1.on('game-started', () => {
  console.log('Game started - waiting for dealer selection...');
});

client1.on('dealer-card-selected', (data) => {
  console.log('Card selected, continuing...');
});

client1.on('dealer-determined', (data) => {
  console.log('Dealer determined, continuing to storm...');
  client1.emit('continue-to-storm');
});

client1.on('storm-started', (data) => {
  console.log('Storm started! Checking for bugs...');
  console.log('Top card:', data.room.gameState.topCard);
  console.log('Toxic seven count:', data.room.gameState.toxicSevenCount);
  
  if (data.room.gameState.topCard.rank === '7' && data.room.gameState.toxicSevenCount === 0) {
    console.log('❌ BUG CONFIRMED: 7 dealt as first card but toxicSevenCount is 0');
  } else if (data.room.gameState.topCard.rank === '7' && data.room.gameState.toxicSevenCount === 1) {
    console.log('✅ Seven toxicity working correctly');
  }
  
  // Test card ID issue
  const player = data.room.myPlayerData;
  if (player && player.cards) {
    player.cards.forEach(card => {
      if (!card.id) {
        console.log('❌ BUG CONFIRMED: Card missing ID:', card);
      } else {
        console.log('✅ Card has ID:', card.id);
      }
    });
  }
  
  // Clean up after 3 seconds
  setTimeout(() => {
    console.log('Test complete, disconnecting...');
    client1.disconnect();
    client2.disconnect();
    process.exit(0);
  }, 3000);
});

// Auto-select dealer cards for progression
let cardSelected = false;
client1.on('room-updated', (data) => {
  if (data.room.gameState.currentStage === 'dealer-selection' && !cardSelected) {
    console.log('Auto-selecting dealer card...');
    client1.emit('select-dealer-card', { cardIndex: 0 });
    setTimeout(() => {
      client2.emit('select-dealer-card', { cardIndex: 1 });
    }, 500);
    cardSelected = true;
  }
});
