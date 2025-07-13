const io = require('socket.io-client');

console.log('🔄 Testing the complete room joining and private chat flow...\n');

const host = io('http://localhost:3501');
const player2 = io('http://localhost:3501');

let roomId = null;
let testsCompleted = 0;
const totalTests = 3;

function completeTest(testName) {
  console.log(`✅ ${testName} - PASSED`);
  testsCompleted++;
  if (testsCompleted === totalTests) {
    console.log('\n🎉 All tests passed! Both fixes are working correctly.');
    cleanup();
  }
}

function failTest(testName, error) {
  console.log(`❌ ${testName} - FAILED:`, error);
  cleanup();
}

// Host workflow
host.on('connect', () => {
  console.log('🔗 Host connected to server');
  host.emit('join-lobby', { name: 'RoomHost' });
});

host.on('lobby-joined', () => {
  console.log('🏠 Host joined lobby');
  host.emit('create-room', { 
    name: 'Integration Test Room', 
    settings: { numberOfLaps: 3, numberOfDice: 1, numberOfDecks: 1, cardsPerHand: 4, numberOfCoins: 2 }
  });
});

host.on('room-created', (data) => {
  console.log('🏠 Host created room successfully');
  roomId = data.roomId;
  completeTest('Room Creation');
  
  // Now trigger player 2 to join
  player2.emit('join-lobby', { name: 'JoiningPlayer' });
});

host.on('player-joined', (data) => {
  console.log('🏠 Host notified that a player joined the room');
  console.log(`   Players in room: ${data.room.players.map(p => p.name).join(', ')}`);
});

host.on('chat-message', (message) => {
  if (message.type === 'private' && message.playerName === 'JoiningPlayer') {
    console.log('🏠 Host received private message from player');
    console.log(`   Message: "${message.message}"`);
    completeTest('Private Message Reception');
  }
});

// Player 2 workflow
player2.on('lobby-joined', () => {
  console.log('👤 Player 2 joined lobby');
  if (roomId) {
    console.log('👤 Player 2 attempting to join room...');
    player2.emit('join-room', { roomId });
  }
});

// This is the critical test - player should receive room-joined and enter the room
player2.on('room-joined', (data) => {
  console.log('👤 Player 2 successfully entered the room!');
  console.log(`   Room: ${data.room.name}`);
  console.log(`   Players: ${data.room.players.map(p => p.name).join(', ')}`);
  completeTest('Room Joining');
  
  // Test private messaging
  const hostPlayer = data.room.players.find(p => p.name === 'RoomHost');
  if (hostPlayer) {
    console.log('👤 Player 2 sending private message to host...');
    player2.emit('private-message', { 
      targetPlayerId: hostPlayer.id, 
      message: 'Hey host! This private message proves the UI fix works!' 
    });
  }
});

// Error handling
host.on('error', (error) => {
  failTest('Host Operation', error.message);
});

player2.on('error', (error) => {
  failTest('Player 2 Operation', error.message);
});

function cleanup() {
  setTimeout(() => {
    host.disconnect();
    player2.disconnect();
    console.log('\n🔚 Test session ended');
    process.exit(0);
  }, 2000);
}

// Safety timeout
setTimeout(() => {
  console.log('\n⏰ Test timed out after 15 seconds');
  if (testsCompleted < totalTests) {
    console.log(`Only ${testsCompleted}/${totalTests} tests completed`);
  }
  cleanup();
}, 15000);
