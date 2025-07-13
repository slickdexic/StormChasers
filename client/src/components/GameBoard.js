import React from 'react';
import styled from 'styled-components';
import { useGame } from '../contexts/GameContext';

const GameContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ComingSoonCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 4rem;
  text-align: center;
  max-width: 600px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-family: 'Orbitron', monospace;
  font-size: 3rem;
  color: #00d4ff;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px #00d4ff;
`;

const Subtitle = styled.h2`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(45deg, #00d4ff, #ff3838);
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(45deg, #ff3838, #00d4ff);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 212, 255, 0.4);
  }
`;

const GameStageInfo = styled.div`
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 10px;
  padding: 1.5rem;
  margin: 2rem 0;
`;

const StageTitle = styled.h3`
  color: #00d4ff;
  font-family: 'Orbitron', monospace;
  margin-bottom: 1rem;
`;

const StageDescription = styled.p`
  color: white;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const FeatureList = styled.ul`
  color: rgba(255, 255, 255, 0.8);
  text-align: left;
  margin: 1rem 0;
  
  li {
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    position: relative;
    
    &::before {
      content: "🏁";
      position: absolute;
      left: 0;
    }
  }
`;

function GameBoard() {
  const { currentRoom, leaveRoom } = useGame();

  return (
    <GameContainer>
      <ComingSoonCard>
        <Title>Game Starting Soon!</Title>
        <Subtitle>Havoc Speedway Racing Engine</Subtitle>
        
        <GameStageInfo>
          <StageTitle>Current Stage: {currentRoom?.gameState?.currentStage || 'Loading...'}</StageTitle>
          <StageDescription>
            The complete game implementation is coming soon! Here's what we're building:
          </StageDescription>
          
          <FeatureList>
            <li><strong>Dealer Selection:</strong> 18-card selection to determine the first dealer</li>
            <li><strong>Storm Stage:</strong> Strategic card game based on Prsi rules</li>
            <li><strong>Lane Selection:</strong> Choose your starting position on the track</li>
            <li><strong>Coin Stage:</strong> Place movement-affecting coins on the track</li>
            <li><strong>Racing Stage:</strong> Real-time racing with dice mechanics</li>
            <li><strong>Interactive Track:</strong> 96-position racing circuit with pit system</li>
            <li><strong>Special Cards:</strong> Queens (wild), Sevens (toxic), Aces (skip)</li>
            <li><strong>Advanced Mechanics:</strong> Chain reactions, obstruction rules, lap counting</li>
          </FeatureList>
        </GameStageInfo>

        <Description>
          The foundation is complete with a robust multiplayer lobby system. 
          Next up: implementing the full game stages with beautiful animations 
          and the complete racing experience!
        </Description>
        
        <BackButton onClick={leaveRoom}>
          Return to Lobby
        </BackButton>
      </ComingSoonCard>
    </GameContainer>
  );
}

export default GameBoard;
