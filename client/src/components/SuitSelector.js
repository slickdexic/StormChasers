import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SuitSelectorContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--secondary-bg);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  gap: 15px;
  z-index: 200;
`;

const SuitButton = styled(motion.button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid var(--accent-color);
  font-size: 30px;
  cursor: pointer;
  background-color: var(--tertiary-bg);
  color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SuitSelector = ({ onSelectSuit }) => {
  const suits = [
    { name: 'hearts', symbol: '♥', color: 'var(--error-color)' },
    { name: 'diamonds', symbol: '♦', color: 'var(--error-color)' },
    { name: 'clubs', symbol: '♣', color: 'var(--primary-text)' },
    { name: 'spades', symbol: '♠', color: 'var(--primary-text)' },
  ];

  return (
    <SuitSelectorContainer
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      {suits.map(suit => (
        <SuitButton
          key={suit.name}
          color={suit.color}
          onClick={() => onSelectSuit(suit.name)}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          {suit.symbol}
        </SuitButton>
      ))}
    </SuitSelectorContainer>
  );
};

export default SuitSelector;
