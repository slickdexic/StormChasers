import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { ACTION_TYPES } from '../constants';

const ChatContext = createContext();

const initialState = {
  messages: [],
};

function chatReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_MESSAGE:
      return { 
        ...state, 
        messages: [...state.messages, action.payload] 
      };
      
    case ACTION_TYPES.CLEAR_MESSAGES:
      return { ...state, messages: [] };
      
    default:
      return state;
  }
}

export function ChatProvider({ children, socket }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  useEffect(() => {
    if (!socket) return;

    socket.on('chat-message', (message) => {
      dispatch({ type: ACTION_TYPES.ADD_MESSAGE, payload: message });
    });

    return () => {
      socket.off('chat-message');
    };
  }, [socket]);

  const actions = {
    sendRoomMessage: (message) => {
      if (socket && message.trim()) {
        socket.emit('room-chat', { message: message.trim() });
      }
    },

    sendPrivateMessage: (targetPlayerId, message) => {
      if (socket && message.trim()) {
        socket.emit('private-message', { 
          targetPlayerId, 
          message: message.trim() 
        });
      }
    },

    clearMessages: () => {
      dispatch({ type: ACTION_TYPES.CLEAR_MESSAGES });
    }
  };

  const value = {
    ...state,
    ...actions
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
