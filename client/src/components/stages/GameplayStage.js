import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import PlayingCard from '../PlayingCard';
import ThemedButton from '../ui/ThemedButton';
import { useSound } from '../../contexts/SoundContext';
import { ACTIONS } from '../../constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  margin: 1rem;
`;

const HandContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
  justify-content: center;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
  justify-content: center;
`;

const PlayerInfo = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0;
  text-align: center;
  color: white;
`;

const TurnIndicator = styled(motion.div)`
  background: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const GameplayStage = ({ gameState, onAction, currentPlayer }) => {
  const playSound = useSound();
  const isPlayerTurn = currentPlayer && gameState.currentPlayerIndex === currentPlayer.index;
  
  const handleAction = (actionType, data = {}) => {
    if (isPlayerTurn) {
      // Play appropriate sound based on action
      switch(actionType) {
        case ACTIONS.DRAW_CARD:
          playSound('cardDraw');
          break;
        case ACTIONS.PLAY_CARD:
          playSound('cardPlay');
          break;
        case ACTIONS.PASS_TURN:
          playSound('turnPass');
          break;
        case ACTIONS.END_ROUND:
          playSound('roundEnd');
          break;
      }
      onAction(actionType, data);
    }
  };

  const canDrawCard = isPlayerTurn && currentPlayer.hand.length < 5;
  const canPlayCard = isPlayerTurn && currentPlayer.hand.length > 0;
  const canPass = isPlayerTurn;

  return (
    <Container>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ color: 'white', marginBottom: '1rem' }}
      >
        Round {gameState.round || 1}
      </motion.h2>

      {isPlayerTurn && (
        <TurnIndicator
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          Your Turn
        </TurnIndicator>
      )}

      {currentPlayer && (
        <PlayerInfo>
          <div>Position: {currentPlayer.position + 1}</div>
          <div>Chips: {currentPlayer.chips}</div>
          <div>Cards in Hand: {currentPlayer.hand?.length || 0}</div>
          {currentPlayer.currentBet > 0 && (
            <div>Current Bet: ${currentPlayer.currentBet}</div>
          )}
        </PlayerInfo>
      )}

      <AnimatePresence>
        {currentPlayer?.hand && currentPlayer.hand.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h3 
              style={{ color: 'white', margin: '1rem 0', textAlign: 'center' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Your Hand
            </motion.h3>
            <HandContainer>
              {currentPlayer.hand.map((card, index) => (
                <motion.div
                  key={`${card.suit}-${card.value}-${index}`}
                  initial={{ opacity: 0, y: 100, rotateZ: -20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateZ: 0,
                    transition: { 
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateZ: 2,
                    zIndex: 10
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => canPlayCard && handleAction(ACTIONS.PLAY_CARD, { cardIndex: index })}
                  style={{ 
                    cursor: canPlayCard ? 'pointer' : 'not-allowed',
                    position: 'relative'
                  }}
                >
                  <PlayingCard 
                    card={card} 
                    interactive={canPlayCard}
                  />
                </motion.div>
              ))}
            </HandContainer>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      >
        <ActionButtons>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ThemedButton
              onClick={() => handleAction(ACTIONS.DRAW_CARD)}
              disabled={!canDrawCard}
            >
              Draw Card
            </ThemedButton>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ThemedButton
              onClick={() => handleAction(ACTIONS.PASS_TURN)}
              disabled={!canPass}
              variant="secondary"
            >
              Pass
            </ThemedButton>
          </motion.div>

          <AnimatePresence>
            {gameState.canEndRound && isPlayerTurn && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ThemedButton
                  onClick={() => handleAction(ACTIONS.END_ROUND)}
                  variant="success"
                >
                  End Round
                </ThemedButton>
              </motion.div>
            )}
          </AnimatePresence>
        </ActionButtons>
      </motion.div>

      <AnimatePresence>
        {gameState.lastPlayedCard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -100 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 20,
              delay: 0.2
            }}
            style={{ marginTop: '1rem' }}
          >
            <motion.h4 
              style={{ color: 'white', textAlign: 'center' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Last Played
            </motion.h4>
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                transition: { duration: 0.6, delay: 0.6 }
              }}
            >
              <PlayingCard card={gameState.lastPlayedCard} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default GameplayStage;
