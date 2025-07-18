import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import PlayingCard from '../PlayingCard';
import ThemedButton from '../ui/ThemedButton';
import { useSound } from '../../contexts/SoundContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const StageTitle = styled.h1`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  color: var(--accent-color);
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 
    0 0 10px var(--accent-color),
    0 0 20px rgba(102, 252, 241, 0.5);
`;

const StageDescription = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  color: var(--primary-text);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const CardSelectionArea = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid var(--tertiary-bg);
  border-radius: 20px;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1400px;
  min-height: 600px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    gap: 1.5rem;
    padding: 2rem;
    min-height: 500px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 1rem;
    padding: 1.5rem;
    min-height: auto;
  }
`;

const DealerCardSlot = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media (max-width: 768px) {
    min-height: 120px;
  }
`;

const DealerAnnouncement = styled(motion.div)`
  background: rgba(0, 0, 0, 0.9);
  padding: 2rem;
  border-radius: 20px;
  border: 3px solid #ffd700;
  text-align: center;
  box-shadow: 0 0 50px rgba(255, 215, 0, 0.6);
  
  h3 {
    color: #ffd700;
    font-family: 'Orbitron', monospace;
    font-size: 1.8rem;
    margin: 0 0 1rem 0;
    text-shadow: 0 0 20px #ffd700;
  }
  
  p {
    color: white;
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.2rem;
    margin: 0 0 2rem 0;
  }
`;

function DealerSelectionStage({ 
  dealerCards, 
  dealerPlayer, 
  isActivePlayer, 
  isHost, 
  onSelectCard, 
  onAdvanceStage,
  activePlayerName 
}) {
  const [showDealer, setShowDealer] = useState(false);
  const [dealingAnimation, setDealingAnimation] = useState(false);
  const [animationStep, setAnimationStep] = useState('waiting');
  const playSound = useSound();

  useEffect(() => {
    // Start dealing animation when component mounts
    if (dealerCards.length === 18 && !dealingAnimation) {
      setDealingAnimation(true);
      setAnimationStep('dealing');
      playSound('card_place');
      // After dealing animation, enable card selection
      setTimeout(() => {
        setAnimationStep('selecting');
      }, 18 * 50 + 400); // 18 cards * 50ms delay + 400ms buffer
    }
  }, [dealerCards, dealingAnimation, playSound]);

  useEffect(() => {
    // Show dealer announcement after selection phase
    if (dealerPlayer && !showDealer) {
      setShowDealer(true);
      setAnimationStep('dealer');
      playSound('game_win');
      // Do NOT auto-advance. Host must click to continue.
    }
  }, [dealerPlayer, showDealer, isHost, onAdvanceStage, playSound]);

  const handleCardClick = (cardIndex) => {
    // Only allow the active player to select an unflipped card and only if dealer not yet determined
    // Prevent selection until dealing animation is complete (animationStep must be 'selecting')
    if (!isActivePlayer || dealerCards[cardIndex]?.isFlipped || dealerPlayer || animationStep !== 'selecting') {
      return;
    }
    playSound('card_place');
    setAnimationStep('selecting');
    onSelectCard(cardIndex);
  };

  const getCardAnimation = (index) => {
    return {
      initial: { 
        opacity: 0, 
        scale: 0.1, 
        rotate: 180,
        x: -200,
        y: -100
      },
      animate: { 
        opacity: 1, 
      }
    };

  return (
    <Container>
      {/* ...rest of your JSX as previously defined... */}
    </Container>
  );
}

}

export default DealerSelectionStage;
