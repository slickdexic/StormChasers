import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useGame } from './contexts/GameContext';

// Components
import WelcomeScreen from './components/WelcomeScreen';
import Lobby from './components/Lobby';
import Room from './components/Room';
import GameBoard from './components/GameBoard';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const { currentView, loading, error, isConnected } = useGame();

  if (!isConnected) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <LoadingSpinner />
        <p>Connecting to Havoc Speedway...</p>
      </div>
    );
  }

  return (
    <div className="App">
      {error && <ErrorMessage message={error} />}
      {loading && <LoadingSpinner overlay />}
      
      <Routes>
        <Route path="/" element={
          currentView === 'welcome' ? <WelcomeScreen /> :
          currentView === 'lobby' ? <Lobby /> :
          currentView === 'room' ? <Room /> :
          currentView === 'game' ? <GameBoard /> :
          <Navigate to="/" replace />
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
