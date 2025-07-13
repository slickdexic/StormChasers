@echo off
echo 🏁 Setting up Havoc Speecho   npm run dev:server  # Terminal 1 - Start server (port 3501)
echo   npm run dev:client  # Terminal 2 - Start client (port 3500)
echo.
echo Then open: http://localhost:3500y...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 16+ first.
    echo    Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js found: 
node --version

REM Install root dependencies
echo 📦 Installing root dependencies...
call npm install

REM Install server dependencies
echo 🖥️  Installing server dependencies...
cd server
call npm install
cd ..

REM Install client dependencies
echo 🌐 Installing client dependencies...
cd client
call npm install
cd ..

echo.
echo 🎉 Setup complete!
echo.
echo To start the game:
echo   npm run dev         # Start both server and client
echo.
echo Or manually:
echo   npm run dev:server  # Terminal 1 - Start server (port 3001)
echo   npm run dev:client  # Terminal 2 - Start client (port 3000)
echo.
echo Then open: http://localhost:3000
echo.
echo 🏁 Ready to race!
pause
