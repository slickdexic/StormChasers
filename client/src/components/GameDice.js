import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const diceRoll = keyframes`
  0% { transform: rotateX(0deg) rotateY(0deg); }
  25% { transform: rotateX(90deg) rotateY(0deg); }
  50% { transform: rotateX(180deg) rotateY(90deg); }
  75% { transform: rotateX(270deg) rotateY(180deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
`;

const diceGlow = keyframes`
  0%, 100% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.3); }
  50% { box-shadow: 0 0 25px rgba(255, 255, 255, 0.6), 0 0 35px rgba(255, 255, 255, 0.2); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const DiceContainer = styled.div`
  perspective: 200px;
  display: inline-block;
  margin: 10px;
`;

const Dice = styled.div`
  width: ${props => props.size === 'large' ? '80px' : props.size === 'medium' ? '60px' : '40px'};
  height: ${props => props.size === 'large' ? '80px' : props.size === 'medium' ? '60px' : '40px'};
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: ${props => props.interactive ? 'pointer' : 'default'};
  
  ${props => props.isRolling && css`
    animation: ${diceRoll} 1s ease-in-out;
  `}
  
  ${props => props.interactive && css`
    &:hover {
      animation: ${bounce} 0.5s ease-in-out;
    }
  `}
  
  ${props => props.isGlowing && css`
    animation: ${diceGlow} 2s ease-in-out infinite;
  `}
`;

const DiceFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%);
  border: 2px solid #333;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.3),
    inset 0 2px 5px rgba(255, 255, 255, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
    border-radius: 6px;
    pointer-events: none;
  }
`;

const Front = styled(DiceFace)`
  transform: rotateY(0deg) translateZ(${props => props.size === 'large' ? '40px' : props.size === 'medium' ? '30px' : '20px'});
`;

const Back = styled(DiceFace)`
  transform: rotateY(180deg) translateZ(${props => props.size === 'large' ? '40px' : props.size === 'medium' ? '30px' : '20px'});
`;

const Right = styled(DiceFace)`
  transform: rotateY(90deg) translateZ(${props => props.size === 'large' ? '40px' : props.size === 'medium' ? '30px' : '20px'});
`;

const Left = styled(DiceFace)`
  transform: rotateY(-90deg) translateZ(${props => props.size === 'large' ? '40px' : props.size === 'medium' ? '30px' : '20px'});
`;

const Top = styled(DiceFace)`
  transform: rotateX(90deg) translateZ(${props => props.size === 'large' ? '40px' : props.size === 'medium' ? '30px' : '20px'});
`;

const Bottom = styled(DiceFace)`
  transform: rotateX(-90deg) translateZ(${props => props.size === 'large' ? '40px' : props.size === 'medium' ? '30px' : '20px'});
`;

const DotsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2px;
  padding: 8px;
  position: relative;
  z-index: 2;
`;

const Dot = styled.div`
  width: ${props => props.size === 'large' ? '8px' : props.size === 'medium' ? '6px' : '4px'};
  height: ${props => props.size === 'large' ? '8px' : props.size === 'medium' ? '6px' : '4px'};
  border-radius: 50%;
  background: #333;
  justify-self: center;
  align-self: center;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(0, 0, 0, 0.1);
`;

const DiceValue = styled.div`
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: ${props => props.size === 'large' ? '32px' : props.size === 'medium' ? '24px' : '16px'};
  color: #333;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
`;

const RollButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(45deg, #00d4ff, #0099cc);
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1rem;
  
  &:hover:not(:disabled) {
    background: linear-gradient(45deg, #0099cc, #00d4ff);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const DiceResultContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  margin-top: 1rem;
`;

const ResultLabel = styled.div`
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 18px;
  font-weight: 600;
`;

const TotalValue = styled.div`
  font-family: 'Orbitron', monospace;
  font-size: 24px;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 0 0 10px #ffd700;
`;

// Dot patterns for each face
const getDotPattern = (value, size) => {
  const patterns = {
    1: [4], // center
    2: [0, 8], // top-left, bottom-right
    3: [0, 4, 8], // diagonal
    4: [0, 2, 6, 8], // corners
    5: [0, 2, 4, 6, 8], // corners + center
    6: [0, 1, 2, 6, 7, 8] // two columns
  };
  
  const pattern = patterns[value] || [];
  
  return Array.from({ length: 9 }, (_, i) => 
    pattern.includes(i) ? <Dot key={i} size={size} /> : <div key={i} />
  );
};

const GameDice = ({ 
  value = 1, 
  size = 'medium',
  interactive = false,
  isRolling = false,
  isGlowing = false,
  showDots = true,
  onClick
}) => {
  const handleClick = () => {
    if (interactive && onClick && !isRolling) {
      onClick();
    }
  };

  return (
    <DiceContainer>
      <Dice
        size={size}
        interactive={interactive}
        isRolling={isRolling}
        isGlowing={isGlowing}
        onClick={handleClick}
      >
        <Front size={size}>
          {showDots ? (
            <DotsContainer>{getDotPattern(value, size)}</DotsContainer>
          ) : (
            <DiceValue size={size}>{value}</DiceValue>
          )}
        </Front>
        
        <Back size={size}>
          {showDots ? (
            <DotsContainer>{getDotPattern(7 - value, size)}</DotsContainer>
          ) : (
            <DiceValue size={size}>{7 - value}</DiceValue>
          )}
        </Back>
        
        <Right size={size}>
          {showDots ? (
            <DotsContainer>{getDotPattern(2, size)}</DotsContainer>
          ) : (
            <DiceValue size={size}>2</DiceValue>
          )}
        </Right>
        
        <Left size={size}>
          {showDots ? (
            <DotsContainer>{getDotPattern(5, size)}</DotsContainer>
          ) : (
            <DiceValue size={size}>5</DiceValue>
          )}
        </Left>
        
        <Top size={size}>
          {showDots ? (
            <DotsContainer>{getDotPattern(3, size)}</DotsContainer>
          ) : (
            <DiceValue size={size}>3</DiceValue>
          )}
        </Top>
        
        <Bottom size={size}>
          {showDots ? (
            <DotsContainer>{getDotPattern(4, size)}</DotsContainer>
          ) : (
            <DiceValue size={size}>4</DiceValue>
          )}
        </Bottom>
      </Dice>
    </DiceContainer>
  );
};

// Dice rolling component
export const DiceRoller = ({ 
  numberOfDice = 1,
  size = 'large',
  onRoll,
  autoRoll = false
}) => {
  const [diceValues, setDiceValues] = useState(Array(numberOfDice).fill(1));
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = async () => {
    if (isRolling) return;
    
    setIsRolling(true);
    
    // Simulate rolling animation
    setTimeout(() => {
      const newValues = Array.from({ length: numberOfDice }, () => 
        Math.floor(Math.random() * 6) + 1
      );
      setDiceValues(newValues);
      setIsRolling(false);
      
      if (onRoll) {
        onRoll(newValues);
      }
    }, 1000);
  };

  const total = diceValues.reduce((sum, value) => sum + value, 0);

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
        {diceValues.map((value, index) => (
          <GameDice
            key={index}
            value={value}
            size={size}
            interactive={!autoRoll}
            isRolling={isRolling}
            isGlowing={!isRolling && value === 6}
            onClick={!autoRoll ? rollDice : undefined}
          />
        ))}
      </div>
      
      {numberOfDice > 1 && (
        <DiceResultContainer>
          <ResultLabel>Total:</ResultLabel>
          <TotalValue>{total}</TotalValue>
        </DiceResultContainer>
      )}
      
      <RollButton 
        onClick={rollDice} 
        disabled={isRolling}
      >
        {isRolling ? 'Rolling...' : 'Roll Dice'}
      </RollButton>
    </div>
  );
};

export default GameDice;
