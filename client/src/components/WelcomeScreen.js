import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useGame } from '../contexts/GameContext';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulseGlow = keyframes`
  0%, 100% { text-shadow: 0 0 20px #00d4ff; }
  50% { text-shadow: 0 0 40px #00d4ff, 0 0 60px #00d4ff; }
`;

const WelcomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow: hidden;
`;

const BackgroundEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 56, 56, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(255, 215, 0, 0.05) 0%, transparent 50%);
  z-index: 0;
`;

const ContentWrapper = styled.div`
  z-index: 1;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h1`
  font-family: 'Orbitron', monospace;
  font-size: 4rem;
  font-weight: 900;
  color: #00d4ff;
  margin-bottom: 1rem;
  animation: ${pulseGlow} 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 3rem;
  opacity: 0.9;
`;

const FormCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.1rem;
`;

const AutocompleteContainer = styled.div`
  position: relative;
  width: 100%;
`;

const AutocompleteList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

const AutocompleteItem = styled.li`
  padding: 12px 15px;
  color: white;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.2);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;


const JoinButton = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(45deg, #00d4ff, #ff3838);
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover:not(:disabled) {
    background: linear-gradient(45deg, #ff3838, #00d4ff);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 212, 255, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;



function WelcomeScreen() {
  const { joinLobby } = useGame();
  const [playerName, setPlayerName] = useState('');
  const [previousNames, setPreviousNames] = useState([]);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);

  // Load previous names from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('havoc-speedway-player-names');
    if (saved) {
      try {
        setPreviousNames(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading previous names:', e);
      }
    }
  }, []);

  // Close autocomplete when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
        setShowAutocomplete(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const savePlayerName = (name) => {
    const trimmedName = name.trim();
    if (!trimmedName) return;

    const updatedNames = [trimmedName, ...previousNames.filter(n => n !== trimmedName)].slice(0, 10);
    setPreviousNames(updatedNames);
    localStorage.setItem('havoc-speedway-player-names', JSON.stringify(updatedNames));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerName.trim()) {
      savePlayerName(playerName);
      joinLobby(playerName.trim());
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setPlayerName(value);
    setShowAutocomplete(value.length > 0 && previousNames.length > 0);
  };

  const handleInputFocus = () => {
    if (previousNames.length > 0) {
      setShowAutocomplete(true);
    }
  };

  const selectName = (name) => {
    setPlayerName(name);
    setShowAutocomplete(false);
    inputRef.current?.focus();
  };

  const filteredNames = previousNames.filter(name => 
    name.toLowerCase().includes(playerName.toLowerCase())
  );

  return (
    <WelcomeContainer>
      <BackgroundEffect />
      <ContentWrapper>
        <Title>HAVOC SPEEDWAY</Title>
        <Subtitle>Multiplayer Racing Championship</Subtitle>
          <FormCard>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Enter Your Racing Name</Label>
              <AutocompleteContainer ref={autocompleteRef}>
                <Input
                  ref={inputRef}
                  type="text"
                  value={playerName}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  placeholder="Enter your name..."
                  maxLength={20}
                  required
                />
                {showAutocomplete && filteredNames.length > 0 && (
                  <AutocompleteList>
                    {filteredNames.map((name, index) => (
                      <AutocompleteItem
                        key={index}
                        onClick={() => selectName(name)}
                      >
                        {name}
                      </AutocompleteItem>
                    ))}
                  </AutocompleteList>
                )}
              </AutocompleteContainer>
            </FormGroup>

            <JoinButton type="submit" disabled={!playerName.trim()}>
              Join the Lobby
            </JoinButton>
          </form>
        </FormCard>
      </ContentWrapper>
    </WelcomeContainer>
  );
}

export default WelcomeScreen;
