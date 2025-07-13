# Havoc Speedway

A modern multiplayer racing game that combines strategic card play with high-speed racing action. Built with Node.js, Socket.IO, and React.

## 🏁 Game Overview

Havoc Speedway is based on the comprehensive GameDevGuide.md and features:

- **Storm Stage**: Strategic card game using Prsi rules (similar to Crazy 8s)
- **Racing Stage**: Multi-lap racing with dice mechanics and strategic coin placement
- **Multiplayer**: Real-time multiplayer for 2-4 players
- **Modern UI**: Professional racing-themed interface with animations

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone and setup the project:**
   ```bash
   # Navigate to the project directory
   cd StormChasers
   
   # Install server dependencies
   cd server
   npm install
   
   # Install client dependencies  
   cd ../client
   npm install
   ```

2. **Start the development servers:**

   **Terminal 1 - Server:**
   ```bash
   cd server
   npm run dev
   ```
   
   **Terminal 2 - Client:**
   ```bash
   cd client  
   npm start
   ```

3. **Open your browser:**
   - Navigate to `http://localhost:3500`
   - Enter your racing name and choose a car color
   - Create a room or join an existing one!

## 🎮 Current Features

### ✅ Completed
- **Professional Lobby System**
  - Create and join racing rooms
  - Real-time room updates
  - Player management with host controls
  - Customizable game settings (laps, dice, decks, etc.)

- **Modern Multiplayer Infrastructure**
  - WebSocket-based real-time communication
  - Room-based chat system
  - Player color selection
  - Connection management

- **Racing-Themed UI**
  - Professional dark theme with neon accents
  - Smooth animations and transitions
  - Responsive design for desktop and mobile
  - Custom fonts (Orbitron + Rajdhani)

### 🚧 In Development
- **Game Stages Implementation**
  - Dealer Selection Stage (18-card selection)
  - Storm Stage (strategic card game)
  - Lane Selection Stage  
  - Coin Stage (strategic placement)
  - Racing Stage (real-time racing)

- **Advanced Features**
  - Interactive racing track (96 positions)
  - Card game mechanics (Queens, Sevens, Aces)
  - Coin effects and chain reactions
  - Pit system and lane changes
  - Lap counting and race completion

## 🏗️ Project Structure

```
StormChasers/
├── server/              # Node.js backend
│   ├── src/
│   │   ├── server.js    # Main server file
│   │   └── models/      # Game logic models
│   └── package.json
├── client/              # React frontend  
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── contexts/    # React context (state management)
│   │   └── styles/      # CSS and styling
│   └── package.json
├── shared/              # Shared game assets
└── GameDevGuide.md      # Complete game specification
```

## 🛠️ Development

### Server Development
```bash
cd server
npm run dev          # Start with nodemon (auto-restart)
npm start           # Production start
npm test            # Run tests
```

### Client Development  
```bash
cd client
npm start           # Development server
npm run build       # Production build
npm test            # Run tests
```

### Game Models

- **Player**: Manages player state, colors, and game progress
- **GameRoom**: Handles room logic, settings, and player management  
- **GameState**: Core game state including deck, discard pile, and stage management

## 🎯 Game Rules Summary

Based on the comprehensive GameDevGuide.md:

### Storm Stage (Card Game)
- **Deck**: 32 cards (7,8,9,10,J,Q,K,A in all suits)
- **Special Cards**:
  - **Queens**: Wild cards (can call suit)
  - **Sevens**: Toxic cards (force draw or stack)
  - **Aces**: Skip next player's turn
- **Objective**: First to discard all cards wins the round

### Racing Stage  
- **Track**: 96-position oval circuit with 4 lanes
- **Movement**: Choice between movement die or lane-change die
- **Coins**: Strategic placement affects other players' movement
- **Pit System**: Penalty area with pit-lane for re-entry
- **Victory**: First to complete all laps wins

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#00d4ff` (neon blue)
- **Primary Red**: `#ff3838` (racing red)  
- **Accent Yellow**: `#ffd700` (gold)
- **Success Green**: `#00ff88` (neon green)
- **Dark Background**: `#0c0c0c` to `#16213e` (gradient)

### Player Colors
8 distinct colors: Yellow, Orange, Red, Pink, Purple, Blue, Green, Black

### Typography
- **Headers**: Orbitron (futuristic/racing feel)
- **Body Text**: Rajdhani (clean, modern sans-serif)

## 🔧 Configuration

### Game Settings (Configurable by Host)
- **Laps**: 1-5 (default: 3)
- **Movement Dice**: 1 or 2 dice (default: 1)  
- **Card Decks**: Single or double deck (default: single)
- **Cards per Hand**: 3-5 cards (default: 4)
- **Coins per Round**: 1-3 coins (default: 2)

## 📡 API Reference

### Socket Events

#### Client → Server
- `join-lobby` - Join the main lobby
- `create-room` - Create a new racing room
- `join-room` - Join an existing room  
- `leave-room` - Leave current room
- `room-chat` - Send message to room
- `change-color` - Change player color
- `start-game` - Start the game (host only)

#### Server → Client  
- `lobby-joined` - Lobby join confirmation
- `room-list-updated` - Updated list of available rooms
- `room-created` - Room creation confirmation
- `player-joined` - Player joined room notification
- `player-left` - Player left room notification  
- `chat-message` - New chat message
- `game-started` - Game start notification
- `error` - Error message

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes  
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🏆 Roadmap

### Phase 1: Foundation ✅
- Multiplayer lobby system
- Room management 
- Real-time communication
- Professional UI/UX

### Phase 2: Game Implementation 🚧
- Complete game stage implementation
- Card game mechanics
- Racing track system
- Animation system

### Phase 3: Polish & Enhancement
- Sound effects and music
- Advanced animations
- Spectator mode
- Tournament system
- Statistics tracking

---

**Ready to race? Fire up those engines! 🏁**
