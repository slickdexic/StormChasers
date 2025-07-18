import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import PlayingCard, { CardHand, CardStack } from '../PlayingCard';
import SuitSelector from '../SuitSelector';
import ThemedButton from '../ui/ThemedButton';
import { useSound } from '../../contexts/SoundContext';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  position: relative;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const GamePlayArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StageTitle = styled(motion.h1)`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  color: var(--accent-color);
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 
    0 0 10px var(--accent-color),
    0 0 20px rgba(102, 252, 241, 0.5);
`;

const DiscardPileArea = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid var(--tertiary-bg);
  border-radius: 20px;
  padding: 2rem;
  min-height: 200px;
  position: relative;
`;

const PlayerHandArea = styled(motion.div)`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 2px solid var(--tertiary-bg);
  border-radius: 20px;
  padding: 1rem;
`;

const GameSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SidebarSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid var(--tertiary-bg);
  border-radius: 15px;
  padding: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const StyledButton = styled.button`
  padding: 12px 24px;
  background: linear-gradient(45deg, var(--accent-color), var(--accent-color-dark));
  border: none;
  border-radius: 10px;
  color: var(--primary-bg);
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 252, 241, 0.4);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

function StormStage({ 
  topCard, 
  toxicSevenCount, 
  stockPileCount, 
  playerCards, 
  isActivePlayer, 
  currentRoom,
  selectedQueenCard,
  onPlayCard,
  onDrawCards,
  onSelectSuit 
}) {
  const playSound = useSound();

  const handlePlayCard = (card) => {
    playSound('cardPlay');
    onPlayCard(card);
  };

  const handleDrawCards = () => {
    playSound('cardDraw');
    onDrawCards();
  };

  const handleSelectSuit = (suit) => {
    playSound('suitSelect');
    onSelectSuit(suit);
  };

  return (
    <Container>
      <GamePlayArea>
        <StageTitle
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            textShadow: [
              "0 0 10px var(--accent-color), 0 0 20px rgba(102, 252, 241, 0.5)",
              "0 0 15px var(--accent-color), 0 0 30px rgba(102, 252, 241, 0.8)",
              "0 0 10px var(--accent-color), 0 0 20px rgba(102, 252, 241, 0.5)"
            ]
          }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 20,
            textShadow: { duration: 2, repeat: Infinity, repeatType: "reverse" }
          }}
        >
          Storm Stage
        </StageTitle>
        
        <AnimatePresence>
          {selectedQueenCard && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <SuitSelector onSelectSuit={handleSelectSuit} />
            </motion.div>
          )}
        </AnimatePresence>

        <DiscardPileArea
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
        >
          <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
            {/* Discard Pile */}
            <motion.div 
              style={{ textAlign: 'center' }}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.h4
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Discard Pile
              </motion.h4>
              <AnimatePresence mode="wait">
                {topCard ? (
                  <motion.div
                    key={`${topCard.rank}-${topCard.suit}`}
                    initial={{ opacity: 0, rotateY: 180, scale: 0.5 }}
                    animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                    exit={{ opacity: 0, rotateY: -180, scale: 0.5 }}
                    transition={{ duration: 0.6 }}
                  >
                    <PlayingCard rank={topCard.rank} suit={topCard.suit} size="large" />
                  </motion.div>
                ) : (
                  <motion.div 
                    style={{
                      width: '120px', 
                      height: '168px', 
                      border: '2px dashed var(--tertiary-bg)', 
                      borderRadius: '12px'
                    }}
                    animate={{ 
                      borderColor: ['var(--tertiary-bg)', 'var(--accent-color)', 'var(--tertiary-bg)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
            
            {/* Stock Pile */}
            <motion.div 
              style={{ textAlign: 'center' }}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.h4 
                style={{ color: toxicSevenCount > 0 ? 'var(--error-color)' : 'white' }}
                animate={{
                  color: toxicSevenCount > 0 ? 
                    ['var(--error-color)', '#ff4757', 'var(--error-color)'] : 
                    'white'
                }}
                transition={{ 
                  duration: 1, 
                  repeat: toxicSevenCount > 0 ? Infinity : 0 
                }}
              >
                Draw {toxicSevenCount > 0 ? toxicSevenCount * 2 : 1}
              </motion.h4>
              <motion.div
                animate={{ 
                  scale: toxicSevenCount > 0 ? [1, 1.05, 1] : 1 
                }}
                transition={{ 
                  duration: 0.5, 
                  repeat: toxicSevenCount > 0 ? Infinity : 0 
                }}
              >
                <CardStack
                  cards={Array(stockPileCount || 0).fill({})}
                  size="large"
                />
              </motion.div>
              {isActivePlayer && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ThemedButton variant="primary" onClick={handleDrawCards}>
                    Draw Cards
                  </ThemedButton>
                </motion.div>
              )}
            </motion.div>
          </div>
        </DiscardPileArea>
        
        <PlayerHandArea
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 150 }}
        >
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Your Hand
          </motion.h4>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <CardHand
              cards={playerCards || []}
              size="large"
              interactive={isActivePlayer}
              onCardClick={handlePlayCard}
              playableCards={playerCards?.filter(c => currentRoom?.gameState?.isPlayable?.(c)) || []}
            />
          </motion.div>
        </PlayerHandArea>
      </GamePlayArea>
      
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
      >
        <GameSidebar>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <SidebarSection>
              <SectionTitle>Game Info</SectionTitle>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Round: {currentRoom?.gameState?.stormRound}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
              >
                Active Player: {currentRoom?.players?.find(p => p.id === currentRoom?.gameState?.activePlayerId)?.name}
              </motion.p>
            </SidebarSection>
          </motion.div>
        </GameSidebar>
      </motion.div>
    </Container>
  );
}

export default StormStage;
