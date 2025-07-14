import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 10px rgba(0, 212, 255, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.3); }
`;

const coinSpin = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

const cardFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(
    135deg, 
    rgba(12, 12, 12, 0.95) 0%, 
    rgba(26, 26, 46, 0.95) 50%, 
    rgba(22, 33, 62, 0.95) 100%
  );
  backdrop-filter: blur(20px);
  border-bottom: 2px solid rgba(0, 212, 255, 0.3);
  padding: 15px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  max-height: 120px;
  overflow: hidden;
`;

const PlayerCard = styled.div`
  background: linear-gradient(
    135deg, 
    rgba(255, 255, 255, 0.08) 0%, 
    rgba(0, 212, 255, 0.05) 50%, 
    rgba(255, 255, 255, 0.03) 100%
  );
  border: 2px solid ${props => props.isCurrentPlayer ? '#00d4ff' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 15px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  ${props => props.isCurrentPlayer && css`
    animation: ${glowPulse} 2s ease-in-out infinite;
    background: linear-gradient(
      135deg, 
      rgba(0, 212, 255, 0.15) 0%, 
      rgba(0, 212, 255, 0.08) 50%, 
      rgba(0, 212, 255, 0.05) 100%
    );
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg, 
      transparent, 
      rgba(255, 255, 255, 0.1), 
      transparent
    );
    transition: left 0.5s ease-in-out;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.2);
  }
`;

const PlayerAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${props => props.color || '#666'};
  border: 3px solid rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  color: ${props => {
    // Determine text color based on background
    const lightColors = ['yellow', 'orange', 'pink'];
    return lightColors.includes(props.colorName) ? '#000' : '#fff';
  }};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 15px;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${PlayerCard}:hover &::after {
    opacity: 1;
  }
`;

const PlayerInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const PlayerName = styled.h3`
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

const PlayerRole = styled.span`
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${props => props.isHost ? 
    'linear-gradient(45deg, #ffd700, #ffed4e)' : 
    props.isDealer ? 
    'linear-gradient(45deg, #ff6b6b, #ff8e8e)' : 
    'linear-gradient(45deg, #00ff88, #4ade80)'
  };
  color: ${props => props.isHost || props.isDealer ? '#000' : '#000'};
  margin-right: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
`;

const CardCount = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  ${props => css`animation: ${props.hasCards ? cardFloat : 'none'} 2s ease-in-out infinite;`}
`;

const CardIcon = styled.div`
  width: 16px;
  height: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  border-radius: 2px;
  border: 1px solid #ccc;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    height: 3px;
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
    border-radius: 1px;
  }
`;

const CoinCount = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 6px;
  border: 1px solid rgba(255, 215, 0, 0.3);
  ${props => css`animation: ${props.hasCoins ? coinSpin : 'none'} 3s linear infinite;`}
`;

const CoinIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ffd700 0%, #ffed4e 50%, #ffc107 100%);
  border: 2px solid #ffab00;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  position: relative;
  
  &::after {
    content: '$';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 8px;
    font-weight: bold;
    color: #b8860b;
  }
`;

const PositionBadge = styled.div`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: bold;
  background: ${props => {
    if (props.position === 1) return 'linear-gradient(45deg, #ffd700, #ffed4e)';
    if (props.position === 2) return 'linear-gradient(45deg, #c0c0c0, #e8e8e8)';
    if (props.position === 3) return 'linear-gradient(45deg, #cd7f32, #d4a574)';
    return 'linear-gradient(45deg, #4a5568, #718096)';
  }};
  color: ${props => props.position <= 3 ? '#000' : '#fff'};
  min-width: 24px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const PlayerCardHeader = ({ players, currentPlayer, gameState }) => {
  const playerColors = {
    yellow: '#ffd700',
    orange: '#ff8c00',
    red: '#ff3838',
    pink: '#ff69b4',
    purple: '#9b59b6',
    blue: '#00d4ff',
    green: '#00ff88',
    black: '#2c3e50'
  };

  const getPlayerInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getPlayerPosition = (player) => {
    if (!gameState?.racePositions) return null;
    return gameState.racePositions.findIndex(p => p.id === player.id) + 1;
  };

  return (
    <HeaderContainer>
      {players?.map((player) => (
        <PlayerCard 
          key={player.id} 
          isCurrentPlayer={player.id === currentPlayer?.id}
        >
          <PlayerAvatar 
            color={playerColors[player.color]} 
            colorName={player.color}
          >
            {getPlayerInitials(player.name)}
          </PlayerAvatar>
          
          <PlayerInfo>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
              {player.isHost && <PlayerRole isHost>Host</PlayerRole>}
              {player.isDealer && <PlayerRole isDealer>Dealer</PlayerRole>}
              {!player.isHost && !player.isDealer && <PlayerRole>Player</PlayerRole>}
              <PlayerName>{player.name}</PlayerName>
            </div>
            
            <StatsContainer>
              <CardCount hasCards={player.handSize > 0}>
                <CardIcon />
                <span>{player.handSize || 0}</span>
              </CardCount>
              
              <CoinCount hasCoins={player.coins > 0}>
                <CoinIcon />
                <span>{player.coins || 0}</span>
              </CoinCount>
              
              {gameState?.currentStage === 'racing' && (
                <PositionBadge position={getPlayerPosition(player)}>
                  #{getPlayerPosition(player)}
                </PositionBadge>
              )}
            </StatsContainer>
          </PlayerInfo>
        </PlayerCard>
      ))}
    </HeaderContainer>
  );
};

export default PlayerCardHeader;
