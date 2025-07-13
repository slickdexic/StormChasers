const io = require('socket.io-client');

console.log('🧪 Testing lobby and room fixes...');

// Test 1: Join lobby without color
const socket1 = io('http://localhost:3501');

socket1.on('connect', () => {
  console.log('✅ Socket 1 connected');
  
  // Test joining lobby without color
  socket1.emit('join-lobby', { name: 'TestPlayer1' }); // No color provided
});

socket1.on('lobby-joined', (data) => {
  console.log('✅ Joined lobby successfully without color');
  console.log('Player data:', data.player);
  
  // Test creating a room
  socket1.emit('create-room', {
    name: 'Test Room',
    settings: {
      numberOfLaps: 3,
      numberOfDice: 1,
      numberOfDecks: 1,
      cardsPerHand: 4,
      numberOfCoins: 2
    }
  });
});

socket1.on('room-created', (data) => {
  console.log('✅ Room created successfully');
  console.log('Room settings:', data.room.settings);
  
  // Test changing color in room
  socket1.emit('change-color', { color: 'red' });
});

socket1.on('player-updated', (data) => {
  console.log('✅ Color change successful');
  console.log('Player color:', data.player.color);
  
  // Create second player to test the numberOfLaps fix
  const socket2 = io('http://localhost:3501');
  
  socket2.on('connect', () => {
    console.log('✅ Socket 2 connected');
    socket2.emit('join-lobby', { name: 'TestPlayer2' });
  });
  
  socket2.on('lobby-joined', () => {
    console.log('✅ Second player joined lobby');
  });
  
  socket2.on('room-list-updated', (rooms) => {
    console.log('✅ Room list updated without errors');
    console.log('Rooms:', rooms.map(r => ({ name: r.name, laps: r.settings?.numberOfLaps })));
    
    // Clean up
    setTimeout(() => {
      socket1.disconnect();
      socket2.disconnect();
      console.log('🎉 All tests passed!');
      process.exit(0);
    }, 1000);
  });
});

socket1.on('error', (error) => {
  console.error('❌ Socket 1 error:', error);
});

// Timeout to prevent hanging
setTimeout(() => {
  console.log('⏰ Test timeout');
  process.exit(1);
}, 10000);
