#!/bin/bash

echo "🏁 Starting echo "🚀 Starting server on port 3501..."
echo "🌐 Health check: http://localhost:3501/health"
echo "🎮 API rooms: http://localhost:3501/api/rooms"oc Speedway Server..."

# Check if we're in the right directory
if [ ! -f "simple-server.js" ]; then
    echo "📂 Navigating to server directory..."
    cd server 2>/dev/null || {
        echo "❌ Error: Cannot find server directory"
        echo "📍 Please run this script from the project root or server directory"
        exit 1
    }
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed"
    echo "📥 Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Error: Failed to install dependencies"
        exit 1
    fi
fi

echo "🚀 Starting server on port 3001..."
echo "🌐 Health check: http://localhost:3001/health"
echo "🎮 API rooms: http://localhost:3001/api/rooms"
echo "⏹️  Press Ctrl+C to stop the server"
echo ""

# Start the server
node simple-server.js
