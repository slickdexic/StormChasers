console.log('🏁 Welcome to Havoc Speedway!');
console.log('📍 Current directory:', process.cwd());
console.log('📁 __dirname:', __dirname);
console.log('📄 __filename:', __filename);

console.log('\n🔧 Testing basic requirements...');

try {
  const express = require('express');
  console.log('✅ Express loaded successfully');
} catch (err) {
  console.log('❌ Express failed to load:', err.message);
}

try {
  const socketIo = require('socket.io');
  console.log('✅ Socket.IO loaded successfully');
} catch (err) {
  console.log('❌ Socket.IO failed to load:', err.message);
}

console.log('\n🚀 All systems ready for Havoc Speedway!');
