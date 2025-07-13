import React, { createContext, useContext, useReducer, useEffect } from 'react';
import io from 'socket.io-client';

const GameContext = createContext();

const initialState = {
  // Connection state
  socket: null,
  isConnected: false,
  
  // Player state
  player: null,
  playerId: null,
  
  // Room state
  currentRoom: null,
  availableRooms: [],
  
  // UI state
  currentView: 'welcome', // welcome, lobby, room, game
  loading: false,
  error: null,
  
  // Chat state
  messages: [],
  
  // Game state
  gameState: null
};

function gameReducer(state, action) {
  switch (action.type) {
    case 'SET_SOCKET':
      return { ...state, socket: action.payload };
      
    case 'SET_CONNECTED':
      return { ...state, isConnected: action.payload };
      
    case 'SET_PLAYER':
      return { 
        ...state, 
        player: action.payload,
        playerId: action.payload?.id || null
      };
      
    case 'SET_CURRENT_VIEW':
      return { ...state, currentView: action.payload };
      
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
      
    case 'SET_ERROR':
      return { ...state, error: action.payload };
      
    case 'SET_AVAILABLE_ROOMS':
      return { ...state, availableRooms: action.payload };
      
    case 'SET_CURRENT_ROOM':
      return { ...state, currentRoom: action.payload };
      
    case 'UPDATE_ROOM':
      return { 
        ...state, 
        currentRoom: state.currentRoom ? { ...state.currentRoom, ...action.payload } : null 
      };
      
    case 'ADD_MESSAGE':
      return { 
        ...state, 
        messages: [...state.messages, action.payload] 
      };
      
    case 'CLEAR_MESSAGES':
      return { ...state, messages: [] };
      
    case 'SET_GAME_STATE':
      return { ...state, gameState: action.payload };
      
    case 'RESET_GAME':
      return {
        ...state,
        currentRoom: null,
        messages: [],
        gameState: null,
        currentView: 'lobby'
      };
      
    default:
      return state;
  }
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    // Initialize socket connection
    const socket = io('http://localhost:3501', {
      transports: ['websocket'],
      upgrade: false
    });

    dispatch({ type: 'SET_SOCKET', payload: socket });

    // Connection event handlers
    socket.on('connect', () => {
      console.log('Connected to server');
      dispatch({ type: 'SET_CONNECTED', payload: true });
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
      dispatch({ type: 'SET_CONNECTED', payload: false });
    });

    // Lobby event handlers
    socket.on('lobby-joined', (data) => {
      dispatch({ type: 'SET_PLAYER', payload: data.player });
      dispatch({ type: 'SET_CURRENT_VIEW', payload: 'lobby' });
      dispatch({ type: 'SET_LOADING', payload: false });
    });

    socket.on('room-list-updated', (rooms) => {
      dispatch({ type: 'SET_AVAILABLE_ROOMS', payload: rooms });
    });

    // Room event handlers
    socket.on('room-created', (data) => {
      dispatch({ type: 'SET_CURRENT_ROOM', payload: data.room });
      dispatch({ type: 'SET_CURRENT_VIEW', payload: 'room' });
      dispatch({ type: 'SET_LOADING', payload: false });
    });

    socket.on('room-joined', (data) => {
      dispatch({ type: 'SET_CURRENT_ROOM', payload: data.room });
      dispatch({ type: 'SET_CURRENT_VIEW', payload: 'room' });
      dispatch({ type: 'SET_LOADING', payload: false });
    });

    socket.on('player-joined', (data) => {
      dispatch({ type: 'UPDATE_ROOM', payload: data.room });
    });

    socket.on('player-left', (data) => {
      dispatch({ type: 'UPDATE_ROOM', payload: data.room });
    });

    socket.on('player-updated', (data) => {
      dispatch({ type: 'UPDATE_ROOM', payload: data.room });
    });

    // Chat event handlers
    socket.on('chat-message', (message) => {
      dispatch({ type: 'ADD_MESSAGE', payload: message });
    });

    // Game event handlers
    socket.on('game-started', (data) => {
      dispatch({ type: 'UPDATE_ROOM', payload: data.room });
      dispatch({ type: 'SET_CURRENT_VIEW', payload: 'game' });
    });

    // Error handler
    socket.on('error', (error) => {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      dispatch({ type: 'SET_LOADING', payload: false });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // Action creators
  const actions = {
    joinLobby: (playerName) => {
      if (state.socket) {
        dispatch({ type: 'SET_LOADING', payload: true });
        state.socket.emit('join-lobby', { name: playerName });
      }
    },

    createRoom: (roomName, settings) => {
      if (state.socket) {
        dispatch({ type: 'SET_LOADING', payload: true });
        state.socket.emit('create-room', { name: roomName, settings });
      }
    },

    joinRoom: (roomId) => {
      if (state.socket) {
        dispatch({ type: 'SET_LOADING', payload: true });
        state.socket.emit('join-room', { roomId });
      }
    },

    leaveRoom: () => {
      if (state.socket) {
        state.socket.emit('leave-room');
        dispatch({ type: 'RESET_GAME' });
      }
    },

    sendRoomMessage: (message) => {
      if (state.socket && message.trim()) {
        state.socket.emit('room-chat', { message: message.trim() });
      }
    },

    sendPrivateMessage: (targetPlayerId, message) => {
      if (state.socket && message.trim()) {
        state.socket.emit('private-message', { 
          targetPlayerId, 
          message: message.trim() 
        });
      }
    },

    changeColor: (color) => {
      if (state.socket) {
        state.socket.emit('change-color', { color });
      }
    },

    startGame: () => {
      if (state.socket) {
        state.socket.emit('start-game');
      }
    },

    clearError: () => {
      dispatch({ type: 'SET_ERROR', payload: null });
    },

    setCurrentView: (view) => {
      dispatch({ type: 'SET_CURRENT_VIEW', payload: view });
    }
  };

  const value = {
    ...state,
    ...actions
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
