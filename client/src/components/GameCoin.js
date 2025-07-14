import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const coinFlip = keyframes`
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(90deg); }
  100% { transform: rotateY(180deg); }
`;

const coinFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const coinGlow = keyframes`
  0%, 100% { box-shadow: 0 0 15px rgba(255, 215, 0, 0.4); }
  50% { box-shadow: 0 0 25px rgba(255, 215, 0, 0.7), 0 0 35px rgba(255, 215, 0, 0.3); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: rotate(0deg) scale(0.5); }
  50% { opacity: 1; transform: rotate(180deg) scale(1); }
`;

const CoinContainer = styled.div`
  width: ${props => props.size === 'large' ? '60px' : props.size === 'medium' ? '40px' : '30px'};
  height: ${props => props.size === 'large' ? '60px' : props.size === 'medium' ? '40px' : '30px'};
  position: relative;
  cursor: ${props => props.interactive ? 'pointer' : 'default'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${props => props.isFloating && css`
    animation: ${coinFloat} 2s ease-in-out infinite;
  `}
  
  ${props => props.isFlipping && css`
    animation: ${coinFlip} 0.8s ease-in-out;
  `}
  
  ${props => props.interactive && css`
    &:hover {
      transform: scale(1.1);
      animation: ${coinGlow} 1.5s ease-in-out infinite;
    }
  `}
`;

const Coin = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  background: ${props => {
    switch (props.type) {
      case 'gold':
        return 'linear-gradient(45deg, #ffd700 0%, #ffed4e 30%, #ffc107 70%, #ff8f00 100%)';
      case 'silver':
        return 'linear-gradient(45deg, #c0c0c0 0%, #e8e8e8 30%, #d3d3d3 70%, #a8a8a8 100%)';
      case 'bronze':
        return 'linear-gradient(45deg, #cd7f32 0%, #d4a574 30%, #b87333 70%, #996515 100%)';
      default:
        return 'linear-gradient(45deg, #ffd700 0%, #ffed4e 30%, #ffc107 70%, #ff8f00 100%)';
    }
  }};
  border: 3px solid ${props => {
    switch (props.type) {
      case 'gold': return '#b8860b';
      case 'silver': return '#999999';
      case 'bronze': return '#8b4513';
      default: return '#b8860b';
    }
  }};
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.3),
    inset 0 2px 5px rgba(255, 255, 255, 0.3),
    inset 0 -2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  color: ${props => {
    switch (props.type) {
      case 'gold': return '#8b6914';
      case 'silver': return '#555555';
      case 'bronze': return '#5d2f0a';
      default: return '#8b6914';
    }
  }};
  font-size: ${props => props.size === 'large' ? '20px' : props.size === 'medium' ? '14px' : '10px'};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    width: 30%;
    height: 30%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 40%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 60%
    );
    ${css`animation: ${sparkle} 3s ease-in-out infinite;`}
  }
`;

const CoinValue = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
`;

const CoinSymbol = styled.div`
  font-size: ${props => props.size === 'large' ? '24px' : props.size === 'medium' ? '16px' : '12px'};
  margin-bottom: ${props => props.size === 'large' ? '2px' : '1px'};
`;

const CoinAmount = styled.div`
  font-size: ${props => props.size === 'large' ? '12px' : props.size === 'medium' ? '10px' : '8px'};
  opacity: 0.8;
`;

const CoinStack = styled.div`
  position: relative;
  display: inline-block;
`;

const StackedCoin = styled.div`
  position: absolute;
  top: ${props => props.index * -3}px;
  left: ${props => props.index * -1}px;
  z-index: ${props => 10 - props.index};
  transform: rotate(${props => props.index * 5}deg);
`;

const CountBadge = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  border: 2px solid white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

const GameCoin = ({ 
  type = 'gold',
  value = 1,
  size = 'medium',
  interactive = false,
  isFloating = false,
  isFlipping = false,
  onClick,
  showValue = true
}) => {
  const handleClick = () => {
    if (interactive && onClick) {
      onClick({ type, value });
    }
  };

  const getSymbol = () => {
    switch (type) {
      case 'gold': return '$';
      case 'silver': return '¢';
      case 'bronze': return '∎';
      default: return '$';
    }
  };

  return (
    <CoinContainer
      size={size}
      interactive={interactive}
      isFloating={isFloating}
      isFlipping={isFlipping}
      onClick={handleClick}
    >
      <Coin type={type} size={size}>
        <CoinValue size={size}>
          <CoinSymbol size={size}>{getSymbol()}</CoinSymbol>
          {showValue && <CoinAmount size={size}>{value}</CoinAmount>}
        </CoinValue>
      </Coin>
    </CoinContainer>
  );
};

// Stack of coins component
export const CoinStackComponent = ({ 
  coins, 
  size = 'medium', 
  maxVisible = 5,
  showCount = true 
}) => {
  const visibleCoins = coins.slice(0, maxVisible);
  const remainingCount = Math.max(0, coins.length - maxVisible);
  
  return (
    <CoinStack>
      {visibleCoins.map((coin, index) => (
        <StackedCoin key={index} index={index}>
          <GameCoin
            type={coin.type}
            value={coin.value}
            size={size}
            showValue={index === 0}
          />
        </StackedCoin>
      ))}
      {showCount && remainingCount > 0 && (
        <CountBadge>+{remainingCount}</CountBadge>
      )}
    </CoinStack>
  );
};

// Collection of coins component
const CoinCollectionContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border: 2px solid rgba(255, 215, 0, 0.2);
  backdrop-filter: blur(5px);
`;

const CoinTypeGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CoinTypeLabel = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CoinCollection = ({ 
  coins, 
  size = 'medium',
  interactive = false,
  onCoinClick,
  groupByType = true 
}) => {
  if (groupByType) {
    const groupedCoins = coins.reduce((groups, coin) => {
      if (!groups[coin.type]) groups[coin.type] = [];
      groups[coin.type].push(coin);
      return groups;
    }, {});

    return (
      <CoinCollectionContainer>
        {Object.entries(groupedCoins).map(([type, typeCoins]) => (
          <CoinTypeGroup key={type}>
            <CoinTypeLabel>{type}</CoinTypeLabel>
            <CoinStackComponent 
              coins={typeCoins}
              size={size}
              maxVisible={3}
            />
          </CoinTypeGroup>
        ))}
      </CoinCollectionContainer>
    );
  }

  return (
    <CoinCollectionContainer>
      {coins.map((coin, index) => (
        <GameCoin
          key={index}
          type={coin.type}
          value={coin.value}
          size={size}
          interactive={interactive}
          onClick={onCoinClick}
          isFloating={interactive}
        />
      ))}
    </CoinCollectionContainer>
  );
};

export default GameCoin;
