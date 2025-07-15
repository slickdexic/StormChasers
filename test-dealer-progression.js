const GameRoom = require('./server/src/models/GameRoom');
const Player = require('./server/src/models/Player');

// Create a test room
console.log('🧪 Testing dealer progression...');

// Add players
const host = new Player('host-id', 'Test Host');
const player2 = new Player('player2-id', 'Player 2');
const player3 = new Player('player3-id', 'Player 3');

const room = new GameRoom('test-room', 'Test Room', host);
room.addPlayer(player2);
room.addPlayer(player3);

console.log('✅ Created room with 3 players');

// Start the game
room.startGame();
console.log('✅ Game started, current stage:', room.gameState.currentStage);

// Simulate dealer selection
console.log('🎯 Testing dealer selection...');

// Select cards for each player (simulate picking low cards)
room.gameState.selectDealerCard(0, 'host-id'); // First card
room.gameState.selectDealerCard(1, 'player2-id'); // Second card  
room.gameState.selectDealerCard(2, 'player3-id'); // Third card

// Resolve dealer
const dealerResult = room.resolveDealerSelection();
console.log('✅ Dealer resolved:', dealerResult);

// Test advance to storm
console.log('🌊 Testing advance to storm...');
console.log('Current stage before advance:', room.gameState.currentStage);

try {
  room.advanceToNextStage();
  console.log('Current stage after advance:', room.gameState.currentStage);
  
  // Test dealCardsAndStartStorm
  console.log('🎯 Testing dealCardsAndStartStorm...');
  console.log('dealHands exists:', !!room.dealHands);
  
  // Mock io and playerSockets for testing
  const mockIo = {
    to: () => ({
      emit: (event, data) => {
        console.log(`📡 Emitted ${event}:`, JSON.stringify(data, null, 2));
      }
    })
  };
  
  const mockPlayerSockets = new Map();
  
  room.dealCardsAndStartStorm(mockIo, mockPlayerSockets);
  
  console.log('✅ Test completed successfully!');
  
} catch (error) {
  console.error('❌ Error during test:', error);
  console.error(error.stack);
}
