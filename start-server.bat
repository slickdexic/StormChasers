@echo off
echo 🏁 Starting Havoc Specho 🚀 Starting server on port 3501...
echo 🌐 Health check: http://localhost:3501/health
echo 🎮 API rooms: http://localhost:3501/api/roomsway Server...

REM Check if we're in the right directory
if not exist "simple-server.js" (
    echo 📂 Navigating to server directory...
    if exist "server" (
        cd server
    ) else (
        echo ❌ Error: Cannot find server directory
        echo 📍 Please run this script from the project root or server directory
        pause
        exit /b 1
    )
)

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Error: Node.js is not installed
    echo 📥 Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if dependencies are installed
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ Error: Failed to install dependencies
        pause
        exit /b 1
    )
)

echo 🚀 Starting server on port 3001...
echo 🌐 Health check: http://localhost:3001/health
echo 🎮 API rooms: http://localhost:3001/api/rooms
echo ⏹️  Press Ctrl+C to stop the server
echo.

REM Start the server
node simple-server.js
