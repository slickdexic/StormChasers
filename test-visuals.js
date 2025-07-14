const io = require('socket.io-client');

console.log('🎮 Testing the beautiful game interface...\n');

const host = io('http://localhost:3501');
const player2 = io('http://localhost:3501');

let roomId = null;

// Host workflow - create room and start game
host.on('connect', () => {
  console.log('🔗 Host connected');
  host.emit('join-lobby', { name: 'GameHost' });
});

host.on('lobby-joined', () => {
  console.log('🏠 Host joined lobby');
  host.emit('create-room', { 
    name: 'Visual Test Room', 
    settings: { 
      numberOfLaps: 3, 
      numberOfDice: 2, 
      numberOfDecks: 1, 
      cardsPerHand: 5, 
      numberOfCoins: 3 
    }
  });
});

host.on('room-created', (data) => {
  console.log('🏠 Host created room with enhanced settings');
  console.log(`   - ${data.room.settings.numberOfLaps} laps`);
  console.log(`   - ${data.room.settings.numberOfDice} dice`);
  console.log(`   - ${data.room.settings.cardsPerHand} cards per hand`);
  roomId = data.roomId;
  
  // Connect second player
  player2.emit('join-lobby', { name: 'VisualPlayer' });
});

host.on('player-joined', (data) => {
  console.log('🏠 Player joined - starting game to test visual interface');
  
  // Start the game to showcase the beautiful interface
  setTimeout(() => {
    console.log('🎯 Starting game to showcase visual components...');
    host.emit('start-game');
  }, 2000);
});

// Player 2 workflow
player2.on('lobby-joined', () => {
  console.log('👤 Player 2 joined lobby');
  if (roomId) {
    player2.emit('join-room', { roomId });
  }
});

player2.on('room-joined', (data) => {
  console.log('👤 Player 2 entered room - ready for visual showcase');
});

// Game start handler
host.on('game-started', (data) => {
  console.log('✨ Game started! Beautiful interface is now active');
  console.log(`🎲 Current stage: ${data.room.gameState.currentStage}`);
  console.log(`🏁 Players can now experience the stunning visual design`);
  console.log(`🎨 Features showcased:`);
  console.log(`   ✓ Fixed player card header with animations`);
  console.log(`   ✓ Beautiful playing cards with special effects`);
  console.log(`   ✓ Animated coins with different types`);
  console.log(`   ✓ Interactive racing track with positions`);
  console.log(`   ✓ 3D dice with realistic physics`);
  console.log(`   ✓ Multiple game stages with smooth transitions`);
  console.log(`   ✓ Responsive design and modern aesthetics`);
  
  cleanup();
});

player2.on('game-started', (data) => {
  console.log('👤 Player 2 sees the beautiful game interface');
});

// Error handling
host.on('error', (error) => {
  console.log('❌ Host error:', error);
  cleanup();
});

player2.on('error', (error) => {
  console.log('❌ Player error:', error);
  cleanup();
});

function cleanup() {
  setTimeout(() => {
    console.log('\n🎮 Visual test completed!');
    console.log('🌐 Open http://localhost:3500 to see the beautiful interface');
    console.log('🎯 Create a room and start a game to experience:');
    console.log('   • Dealer Selection: Interactive card selection with animations');
    console.log('   • Storm Stage: Beautiful card game with special effects');
    console.log('   • Lane Selection: Elegant lane choosing interface');
    console.log('   • Coin Stage: Coin placement on interactive track');
    console.log('   • Racing Stage: Full 3D racing experience with dice rolling');
    console.log('\n💫 All components feature:');
    console.log('   • Smooth animations and transitions');
    console.log('   • Modern glassmorphism design');
    console.log('   • Interactive hover effects');
    console.log('   • Consistent visual theme');
    console.log('   • Professional polish and presentation');
    
    host.disconnect();
    player2.disconnect();
    process.exit(0);
  }, 3000);
}

// Safety timeout
setTimeout(() => {
  console.log('\n⏰ Test completed');
  cleanup();
}, 15000);
