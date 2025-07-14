// Simple test to check socket connection
console.log('Testing socket connection to localhost:3501...');

const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3501,
  path: '/socket.io/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`✅ Server is responding on port 3501. Status: ${res.statusCode}`);
  console.log('Headers:', res.headers);
  process.exit(0);
});

req.on('error', (err) => {
  console.log(`❌ Connection failed: ${err.message}`);
  process.exit(1);
});

req.setTimeout(5000, () => {
  console.log('❌ Connection timed out');
  process.exit(1);
});

req.end();
