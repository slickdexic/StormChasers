const io = require('socket.io-client');

console.log('Testing enhanced game features...\n');

// Try connecting to server
const testSocket = io('http://localhost:3501');

testSocket.on('connect', () => {
  console.log('✅ Connected to server');
  
  // Test joining lobby
  testSocket.emit('join-lobby', { name: 'TestUser' });
});

testSocket.on('lobby-joined', (data) => {
  console.log('✅ Joined lobby');
  
  // Test creating room
  testSocket.emit('create-room', { roomName: 'Feature Test Room' });
});

testSocket.on('room-created', (data) => {
  console.log('✅ Room created:', data.room.name);
  console.log('Initial settings:', data.room.settings);
  
  // Test updating settings
  const newSettings = {
    numberOfLaps: 5,
    numberOfDice: 2,
    numberOfDecks: 2,
    cardsPerHand: 5,
    numberOfCoins: 3
  };
  
  console.log('\n🔧 Testing settings update...');
  testSocket.emit('update-settings', newSettings);
});

testSocket.on('room-updated', (data) => {
  console.log('✅ Settings updated successfully!');
  console.log('New settings:', data.room.settings);
  
  setTimeout(() => {
    console.log('\n✅ All tests completed successfully!');
    process.exit(0);
  }, 1000);
});

testSocket.on('error', (error) => {
  console.error('❌ Error:', error);
});

testSocket.on('connect_error', (error) => {
  console.error('❌ Connection failed:', error.message);
  process.exit(1);
});

// Timeout after 10 seconds
setTimeout(() => {
  console.log('❌ Test timed out');
  process.exit(1);
}, 10000);
