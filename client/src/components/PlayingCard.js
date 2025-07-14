import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const cardFlip = keyframes`
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(90deg); }
  100% { transform: rotateY(0deg); }
`;

const cardHover = keyframes`
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-8px) scale(1.05); }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 10px rgba(0, 212, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.6), 0 0 30px rgba(0, 212, 255, 0.2); }
`;

const CardContainer = styled.div`
  width: ${props => props.size === 'large' ? '120px' : props.size === 'medium' ? '80px' : '60px'};
  height: ${props => props.size === 'large' ? '168px' : props.size === 'medium' ? '112px' : '84px'};
  perspective: 1000px;
  cursor: ${props => props.interactive ? 'pointer' : 'default'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${props => props.interactive && `
    &:hover {
      transform: translateY(-12px) scale(1.05);
      filter: drop-shadow(0 12px 25px rgba(0, 0, 0, 0.4));
    }
  `}
  
  ${props => props.isPlayable && css`
    animation: ${glowPulse} 2s ease-in-out infinite;
  `}
  
  ${props => props.isAnimating && css`
    animation: ${cardFlip} 0.6s ease-in-out;
  `}
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${props => props.isFlipped && `
    transform: rotateY(180deg);
  `}
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.3),
    0 1px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
    pointer-events: none;
  }
`;

const CardFront = styled(CardFace)`
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #f8f9fa 50%,
    #e9ecef 100%
  );
  color: ${props => getSuitColor(props.suit)};
  transform: rotateY(0deg);
`;

const CardBack = styled(CardFace)`
  background: linear-gradient(
    135deg,
    #1a1a2e 0%,
    #16213e 50%,
    #0f1419 100%
  );
  transform: rotateY(180deg);
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 60%;
    transform: translate(-50%, -50%);
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4"><path d="M 0,4 l 4,-4 M -1,1 l 2,-2 M 3,5 l 2,-2" stroke="%2300d4ff" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23diagonalHatch)" opacity="0.3"/></svg>') no-repeat center;
    background-size: contain;
    border-radius: 8px;
    border: 1px solid rgba(0, 212, 255, 0.3);
  }
`;

const RankDisplay = styled.div`
  font-size: ${props => props.size === 'large' ? '24px' : props.size === 'medium' ? '18px' : '14px'};
  font-weight: bold;
  font-family: 'Rajdhani', sans-serif;
  position: absolute;
  top: 8px;
  left: 8px;
  line-height: 1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const SuitDisplay = styled.div`
  font-size: ${props => props.size === 'large' ? '48px' : props.size === 'medium' ? '32px' : '24px'};
  line-height: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3));
`;

const CornerRank = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: ${props => props.size === 'large' ? '16px' : props.size === 'medium' ? '12px' : '10px'};
  font-weight: bold;
  font-family: 'Rajdhani', sans-serif;
  transform: rotate(180deg);
  opacity: 0.7;
`;

const SpecialCardGlow = styled.div`
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 14px;
  background: ${props => {
    if (props.rank === 'Q') return 'linear-gradient(45deg, #9b59b6, #8e44ad)';
    if (props.rank === '7') return 'linear-gradient(45deg, #e74c3c, #c0392b)';
    if (props.rank === 'A') return 'linear-gradient(45deg, #f39c12, #e67e22)';
    return 'transparent';
  }};
  opacity: ${props => props.isSpecial ? '0.3' : '0'};
  transition: opacity 0.3s ease;
  pointer-events: none;
  
  ${CardContainer}:hover & {
    opacity: ${props => props.isSpecial ? '0.6' : '0'};
  }
`;

function getSuitColor(suit) {
  switch (suit) {
    case 'hearts':
    case 'diamonds':
      return '#e74c3c';
    case 'spades':
    case 'clubs':
      return '#2c3e50';
    default:
      return '#2c3e50';
  }
}

function getSuitSymbol(suit) {
  switch (suit) {
    case 'hearts': return '♥';
    case 'diamonds': return '♦';
    case 'spades': return '♠';
    case 'clubs': return '♣';
    default: return '';
  }
}

function isSpecialCard(rank) {
  return ['Q', '7', 'A'].includes(rank);
}

const PlayingCard = ({ 
  rank, 
  suit, 
  isBack = false, 
  size = 'medium', 
  interactive = false,
  isPlayable = false,
  isAnimating = false,
  onClick,
  style = {}
}) => {
  const handleClick = () => {
    if (interactive && onClick) {
      onClick({ rank, suit });
    }
  };

  return (
    <CardContainer
      size={size}
      interactive={interactive}
      isPlayable={isPlayable}
      isAnimating={isAnimating}
      onClick={handleClick}
      style={style}
    >
      <Card isFlipped={isBack}>
        <CardFront suit={suit}>
          <SpecialCardGlow 
            rank={rank} 
            isSpecial={isSpecialCard(rank)} 
          />
          
          <RankDisplay size={size}>
            {rank}
          </RankDisplay>
          
          <SuitDisplay size={size}>
            {getSuitSymbol(suit)}
          </SuitDisplay>
          
          <CornerRank size={size}>
            {rank}
          </CornerRank>
        </CardFront>
        
        <CardBack />
      </Card>
    </CardContainer>
  );
};

// Stack of cards component
const CardStackContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StackedCard = styled.div`
  position: absolute;
  top: ${props => props.index * -2}px;
  left: ${props => props.index * -1}px;
  transform: rotate(${props => (props.index - 1) * 2}deg);
  z-index: ${props => 10 - props.index};
`;

export const CardStack = ({ cards, size = 'medium', maxVisible = 3 }) => {
  const visibleCards = cards.slice(-maxVisible);
  
  return (
    <CardStackContainer>
      {visibleCards.map((card, index) => (
        <StackedCard key={index} index={index}>
          <PlayingCard
            rank={card?.rank}
            suit={card?.suit}
            isBack={true}
            size={size}
          />
        </StackedCard>
      ))}
    </CardStackContainer>
  );
};

// Hand of cards component
const HandContainer = styled.div`
  display: flex;
  gap: ${props => props.size === 'large' ? '-30px' : props.size === 'medium' ? '-20px' : '-15px'};
  padding: 20px;
  align-items: center;
  justify-content: center;
  
  & > *:hover {
    z-index: 100;
    position: relative;
  }
`;

export const CardHand = ({ 
  cards, 
  size = 'medium', 
  interactive = false,
  playableCards = [],
  onCardClick 
}) => {
  return (
    <HandContainer size={size}>
      {cards.map((card, index) => (
        <PlayingCard
          key={`${card.rank}-${card.suit}-${index}`}
          rank={card.rank}
          suit={card.suit}
          size={size}
          interactive={interactive}
          isPlayable={playableCards.some(pc => 
            pc.rank === card.rank && pc.suit === card.suit
          )}
          onClick={onCardClick}
          style={{
            transform: `rotate(${(index - (cards.length - 1) / 2) * 8}deg)`,
            zIndex: index
          }}
        />
      ))}
    </HandContainer>
  );
};

export default PlayingCard;
