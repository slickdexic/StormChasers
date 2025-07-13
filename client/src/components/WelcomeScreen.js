import React, { useState } from 'react';
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

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

const ColorOption = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid ${props => props.selected ? '#ffffff' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px ${props => props.color};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background: ${props => props.color};
    transform: translate(-50%, -50%);
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

const playerColors = [
  { name: 'yellow', value: '#ffd700' },
  { name: 'orange', value: '#ff8c00' },
  { name: 'red', value: '#ff3838' },
  { name: 'pink', value: '#ff69b4' },
  { name: 'purple', value: '#9b59b6' },
  { name: 'blue', value: '#00d4ff' },
  { name: 'green', value: '#00ff88' },
  { name: 'black', value: '#2c3e50' }
];

function WelcomeScreen() {
  const { joinLobby } = useGame();
  const [playerName, setPlayerName] = useState('');
  const [selectedColor, setSelectedColor] = useState('blue');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerName.trim()) {
      joinLobby(playerName.trim(), selectedColor);
    }
  };

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
              <Input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Enter your name..."
                maxLength={20}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Choose Your Car Color</Label>
              <ColorGrid>
                {playerColors.map((color) => (
                  <ColorOption
                    key={color.name}
                    type="button"
                    color={color.value}
                    selected={selectedColor === color.name}
                    onClick={() => setSelectedColor(color.name)}
                    title={color.name}
                  />
                ))}
              </ColorGrid>
            </FormGroup>

            <JoinButton type="submit" disabled={!playerName.trim()}>
              Join the Race
            </JoinButton>
          </form>
        </FormCard>
      </ContentWrapper>
    </WelcomeContainer>
  );
}

export default WelcomeScreen;
