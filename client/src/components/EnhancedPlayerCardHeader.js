import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 15px rgba(0, 212, 255, 0.6); }
  50% { box-shadow: 0 0 25px rgba(0, 212, 255, 0.9), 0 0 35px rgba(0, 212, 255, 0.4); }
`;

const dealerButtonGlow = keyframes`
  0%, 100% { box-shadow: 0 0 10px rgba(255, 215, 0, 0.6); }
  50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.9); }
`;

const cardFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-2px); }
`;

const coinFlip = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

const badgeSlideIn = keyframes`
  0% { transform: scale(0) rotate(-180deg); opacity: 0; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(
    135deg, 
    rgba(12, 12, 12, 0.98) 0%, 
    rgba(26, 26, 46, 0.98) 50%, 
    rgba(22, 33, 62, 0.98) 100%
  );
  backdrop-filter: blur(25px);
  border-bottom: 3px solid rgba(0, 212, 255, 0.4);
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  min-height: 140px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const PlayerCard = styled.div`
  position: relative;
  width: 220px;
  height: 100px;
  background: linear-gradient(
    135deg, 
    rgba(255, 255, 255, 0.12) 0%, 
    rgba(0, 212, 255, 0.08) 30%, 
    rgba(255, 255, 255, 0.05) 70%, 
    rgba(0, 212, 255, 0.06) 100%
  );
  border: 3px solid ${props => props.isCurrentPlayer ? '#00d4ff' : 'rgba(255, 255, 255, 0.15)'};
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: visible;
  
  ${props => props.isCurrentPlayer && css`
    animation: ${glowPulse} 2.5s ease-in-out infinite;
    background: linear-gradient(
      135deg, 
      rgba(0, 212, 255, 0.2) 0%, 
      rgba(0, 212, 255, 0.12) 30%, 
      rgba(0, 212, 255, 0.08) 70%, 
      rgba(0, 212, 255, 0.15) 100%
    );
    border-color: #00d4ff;
    box-shadow: 0 0 25px rgba(0, 212, 255, 0.5);
  `}

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 212, 255, 0.3);
  }
`;

const DealerButton = styled.div`
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  color: #000;
  padding: 6px 12px;
  border-radius: 15px;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.7rem;
  text-transform: uppercase;
  border: 2px solid #ffcc00;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.6);
  animation: ${dealerButtonGlow} 2s ease-in-out infinite;
  z-index: 10;
`;

const WinningBadge = styled.div`
  position: absolute;
  top: -6px;
  left: -6px;
  width: 24px;
  height: 24px;
  background: ${props => {
    switch(props.position) {
      case 1: return 'linear-gradient(45deg, #ffd700, #ffed4e)';
      case 2: return 'linear-gradient(45deg, #c0c0c0, #e8e8e8)';
      case 3: return 'linear-gradient(45deg, #cd7f32, #deb887)';
      case 4: return 'linear-gradient(45deg, #4a5568, #718096)';
      default: return '#666';
    }
  }};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.8rem;
  color: ${props => props.position <= 3 ? '#000' : '#fff'};
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  animation: ${badgeSlideIn} 0.5s ease-out;
  z-index: 10;
`;

const LapIndicator = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  background: rgba(0, 212, 255, 0.9);
  color: white;
  padding: 4px 8px;
  border-radius: 10px;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.7rem;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 8px rgba(0, 212, 255, 0.4);
`;

const PlayerName = styled.div`
  font-family: 'Orbitron', monospace;
  font-weight: 600;
  font-size: 0.9rem;
  color: white;
  text-align: center;
  margin-bottom: 4px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
`;

const PlayerPawn = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  background: linear-gradient(145deg, ${props => props.color || '#666'}, ${props => {
    const baseColor = props.color || '#666';
    // Create a darker shade for gradient
    return baseColor === 'yellow' ? '#cc9900' :
           baseColor === 'orange' ? '#cc6600' :
           baseColor === 'red' ? '#cc0000' :
           baseColor === 'pink' ? '#cc6699' :
           baseColor === 'purple' ? '#6600cc' :
           baseColor === 'blue' ? '#0066cc' :
           baseColor === 'green' ? '#00cc66' :
           baseColor === 'black' ? '#333333' : '#444';
  }});
  border: 3px solid rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 1rem;
  color: ${props => ['yellow', 'orange', 'pink'].includes(props.color) ? 'black' : 'white'};
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.4),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 5;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background: ${props => props.color || '#666'};
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 6px;
    background: linear-gradient(145deg, ${props => props.color || '#666'}, ${props => {
      const baseColor = props.color || '#666';
      return baseColor === 'yellow' ? '#cc9900' :
             baseColor === 'orange' ? '#cc6600' :
             baseColor === 'red' ? '#cc0000' :
             baseColor === 'pink' ? '#cc6699' :
             baseColor === 'purple' ? '#6600cc' :
             baseColor === 'blue' ? '#0066cc' :
             baseColor === 'green' ? '#00cc66' :
             baseColor === 'black' ? '#333333' : '#444';
    }});
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 
      0 6px 16px rgba(0, 0, 0, 0.5),
      inset 0 2px 4px rgba(255, 255, 255, 0.4);
  }
`;

const PawnSymbol = styled.span`
  font-size: 0.9rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

const CardCount = styled.div`
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
`;

const FannedCards = styled.div`
  display: flex;
  position: relative;
  height: 35px;
  
  .card {
    width: 20px;
    height: 30px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    margin-left: -12px;
    animation: ${cardFloat} 3s ease-in-out infinite;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      right: 2px;
      bottom: 2px;
      background: linear-gradient(135deg, #2c3e50, #34495e);
      border-radius: 2px;
    }
    
    &:first-child {
      margin-left: 0;
    }
    
    &:nth-child(1) { animation-delay: 0s; transform: rotate(-15deg); }
    &:nth-child(2) { animation-delay: 0.2s; transform: rotate(-10deg); }
    &:nth-child(3) { animation-delay: 0.4s; transform: rotate(-5deg); }
    &:nth-child(4) { animation-delay: 0.6s; transform: rotate(0deg); }
    &:nth-child(5) { animation-delay: 0.8s; transform: rotate(5deg); }
    &:nth-child(6) { animation-delay: 1.0s; transform: rotate(10deg); }
    &:nth-child(7) { animation-delay: 1.2s; transform: rotate(15deg); }
    &:nth-child(8) { animation-delay: 1.4s; transform: rotate(20deg); }
  }
`;

const CardCountBadge = styled.div`
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  color: #000;
  padding: 4px 10px;
  border-radius: 12px;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.9rem;
  border: 2px solid #ffcc00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: -5px;
  right: -10px;
  z-index: 10;
`;

const CoinsContainer = styled.div`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
  z-index: 5;
`;

const CoinDisplay = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${props => props.faceUp ? (
    props.type === 'gold' ? 'linear-gradient(45deg, #ffd700, #ffed4e)' :
    props.type === 'silver' ? 'linear-gradient(45deg, #c0c0c0, #e8e8e8)' :
    'linear-gradient(45deg, #cd7f32, #deb887)'
  ) : 'linear-gradient(45deg, #2c3e50, #34495e)'};
  border: 2px solid rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.6rem;
  color: ${props => props.faceUp && props.type !== 'bronze' ? '#000' : '#fff'};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  animation: ${coinFlip} 2s linear infinite;
  animation-play-state: ${props => props.isSelected ? 'running' : 'paused'};
  cursor: ${props => props.isSelectable ? 'pointer' : 'default'};
  
  &:hover {
    transform: ${props => props.isSelectable ? 'scale(1.1)' : 'none'};
    box-shadow: ${props => props.isSelectable ? '0 0 10px rgba(255, 215, 0, 0.6)' : '0 2px 6px rgba(0, 0, 0, 0.3)'};
  }
`;

const DiceContainer = styled.div`
  position: absolute;
  bottom: -20px;
  right: -5px;
  display: flex;
  gap: 3px;
  z-index: 5;
`;

const DiceDisplay = styled.div`
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  border: 2px solid #333;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.8rem;
  color: #333;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
`;

function EnhancedPlayerCardHeader({ 
  players = [], 
  currentPlayer, 
  gameStage = 'lobby',
  onCoinSelect 
}) {
  const renderStageSpecificElements = (player) => {
    const elements = [];
    
    // Dealer button
    if (player.dealerButton) {
      elements.push(
        <DealerButton key="dealer">
          DEALER
        </DealerButton>
      );
    }
    
    // Winning badges
    if (player.stormFinishOrder && player.stormFinishOrder > 0) {
      elements.push(
        <WinningBadge key="badge" position={player.stormFinishOrder}>
          {player.stormFinishOrder}
        </WinningBadge>
      );
    }
    
    // Lap indicator (racing stages)
    if (gameStage.includes('racing') || gameStage.includes('coin')) {
      elements.push(
        <LapIndicator key="lap">
          L{player.lap || 1}
        </LapIndicator>
      );
    }
    
    // Card count (storm stage)
    if (gameStage === 'storm' && typeof player.cardCount === 'number') {
      const cardCount = player.cardCount;
      const cardsToShow = Math.min(cardCount, 8); // Show max 8 cards visually
      const cardElements = [];
      
      for (let i = 0; i < cardsToShow; i++) {
        cardElements.push(<div key={i} className="card" />);
      }
      
      elements.push(
        <CardCount key="cards">
          <FannedCards>
            {cardElements}
            <CardCountBadge>
              {cardCount}
            </CardCountBadge>
          </FannedCards>
        </CardCount>
      );
    }
    
    // Coins (coin stage only)
    if (gameStage === 'coin' && player.drawnCoins && player.drawnCoins.length > 0) {
      elements.push(
        <CoinsContainer key="coins">
          {player.drawnCoins.map((coin, index) => (
            <CoinDisplay
              key={index}
              type={coin.type}
              faceUp={coin.faceUp}
              isSelected={coin.isSelected}
              isSelectable={coin.isSelectable}
              onClick={() => coin.isSelectable && onCoinSelect && onCoinSelect(player.id, index)}
            >
              {coin.faceUp ? coin.value : '?'}
            </CoinDisplay>
          ))}
        </CoinsContainer>
      );
    }
    
    // Dice (racing stage)
    if (gameStage === 'racing' && player.lastDiceRoll && player.lastDiceRoll.length > 0) {
      elements.push(
        <DiceContainer key="dice">
          {player.lastDiceRoll.map((value, index) => (
            <DiceDisplay key={index}>
              {value}
            </DiceDisplay>
          ))}
        </DiceContainer>
      );
    }
    
    return elements;
  };

  return (
    <HeaderContainer>
      {players.map((player) => (
        <PlayerCard 
          key={player.id} 
          isCurrentPlayer={currentPlayer === player.id}
        >
          {renderStageSpecificElements(player)}
          
          <PlayerName>
            {player.name}
          </PlayerName>
          
          <PlayerPawn color={player.color}>
            <PawnSymbol>♟</PawnSymbol>
          </PlayerPawn>
        </PlayerCard>
      ))}
    </HeaderContainer>
  );
}

export default EnhancedPlayerCardHeader;
