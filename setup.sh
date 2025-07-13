#!/bin/bash

echo "🏁 Setting up Havoc Speedway..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install server dependencies
echo "🖥️  Installing server dependencies..."
cd server
npm install
cd ..

# Install client dependencies  
echo "🌐 Installing client dependencies..."
cd client
npm install
cd ..

echo ""
echo "🎉 Setup complete!"
echo ""
echo "To start the game:"
echo "  npm run dev         # Start both server and client"
echo ""
echo "Or manually:"
echo "  npm run dev:server  # Terminal 1 - Start server (port 3501)"
echo "  npm run dev:client  # Terminal 2 - Start client (port 3500)"
echo ""
echo "Then open: http://localhost:3500"
echo ""
echo "🏁 Ready to race!"
