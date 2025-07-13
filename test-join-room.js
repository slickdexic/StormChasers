const io = require('socket.io-client');

// Test the room joining fix
console.log('Testing room joining fix...');

const host = io('http://localhost:3501');
const player = io('http://localhost:3501');

let roomId = null;

host.on('connect', () => {
  console.log('Host connected');
  host.emit('join-lobby', { name: 'TestHost' });
});

host.on('lobby-joined', () => {
  console.log('Host joined lobby');
  host.emit('create-room', { 
    name: 'Test Room', 
    settings: { numberOfLaps: 3, numberOfDice: 1, numberOfDecks: 1, cardsPerHand: 4, numberOfCoins: 2 }
  });
});

host.on('room-created', (data) => {
  console.log('Host created room:', data.room.name);
  roomId = data.roomId;
  
  // Now connect the second player
  player.emit('join-lobby', { name: 'TestPlayer' });
});

player.on('lobby-joined', () => {
  console.log('Player joined lobby');
  if (roomId) {
    console.log('Player attempting to join room:', roomId);
    player.emit('join-room', { roomId });
  }
});

// This is the key test - the player should receive room-joined
player.on('room-joined', (data) => {
  console.log('✅ SUCCESS: Player received room-joined event!');
  console.log('Room data:', {
    name: data.room.name,
    players: data.room.players.length,
    playerNames: data.room.players.map(p => p.name)
  });
  
  // Test private message
  const targetPlayerId = data.room.players.find(p => p.name === 'TestHost').id;
  console.log('Testing private message to host:', targetPlayerId);
  player.emit('private-message', { 
    targetPlayerId, 
    message: 'Hello host, this is a private message!' 
  });
});

host.on('chat-message', (message) => {
  if (message.type === 'private') {
    console.log('✅ SUCCESS: Host received private message!');
    console.log('Private message:', message);
    cleanup();
  }
});

// Listen for errors
host.on('error', (error) => {
  console.log('❌ Host error:', error);
  cleanup();
});

player.on('error', (error) => {
  console.log('❌ Player error:', error);
  cleanup();
});

function cleanup() {
  setTimeout(() => {
    host.disconnect();
    player.disconnect();
    console.log('Test completed');
    process.exit(0);
  }, 1000);
}

// Timeout after 10 seconds
setTimeout(() => {
  console.log('❌ Test timed out');
  cleanup();
}, 10000);
