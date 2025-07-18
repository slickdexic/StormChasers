import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
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

const BettingOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
  width: 100%;
  max-width: 600px;
`;

const BetAmount = styled(motion.div)`
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
  border: 2px solid;
`;

const Timer = styled(motion.div)`
  font-size: 2rem;
  font-weight: bold;
  color: #ff6b6b;
  margin-bottom: 1rem;
`;

const CurrentBet = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0;
  text-align: center;
  color: white;
`;

const BettingStage = ({ gameState, onAction, currentPlayer }) => {
  const [selectedBet, setSelectedBet] = React.useState(null);
  const playSound = useSound();
  const betAmounts = [10, 25, 50, 100, 250, 500];
  
  const handleBetSelection = (amount) => {
    playSound('chipSelect');
    setSelectedBet(amount);
  };

  const handlePlaceBet = () => {
    if (selectedBet !== null) {
      playSound('betPlace');
      onAction(ACTIONS.PLACE_BET, { amount: selectedBet });
      setSelectedBet(null);
    }
  };

  const canBet = currentPlayer && currentPlayer.chips >= (selectedBet || 10);
  const timeRemaining = gameState.bettingTimeLeft || 30;

  return (
    <Container>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ color: 'white', marginBottom: '1rem' }}
      >
        Place Your Bets
      </motion.h2>

      <Timer
        initial={{ scale: 0 }}
        animate={{ 
          scale: timeRemaining <= 10 ? [1, 1.1, 1] : 1,
          color: timeRemaining <= 10 ? '#ff4757' : '#ff6b6b'
        }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          repeat: timeRemaining <= 10 ? Infinity : 0,
          repeatType: "loop",
          duration: 0.5
        }}
      >
        {timeRemaining}s
      </Timer>

      <AnimatePresence>
        {currentPlayer && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.2 }}
          >
            <CurrentBet>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Available Chips: {currentPlayer.chips}
              </motion.div>
              {currentPlayer.currentBet > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Current Bet: {currentPlayer.currentBet}
                </motion.div>
              )}
            </CurrentBet>
          </motion.div>
        )}
      </AnimatePresence>

      <BettingOptions>
        {betAmounts.map((amount, index) => (
          <motion.div
            key={amount}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, type: "spring", stiffness: 200 }}
          >
            <BetAmount
              selected={selectedBet === amount}
              onClick={() => handleBetSelection(amount)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                background: selectedBet === amount ? '#4CAF50' : 'rgba(255, 255, 255, 0.1)',
                borderColor: selectedBet === amount ? '#4CAF50' : 'rgba(255, 255, 255, 0.3)'
              }}
            >
              ${amount}
            </BetAmount>
          </motion.div>
        ))}
      </BettingOptions>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <ThemedButton
          onClick={handlePlaceBet}
          disabled={!canBet || selectedBet === null}
          style={{
            opacity: (!canBet || selectedBet === null) ? 0.5 : 1,
            cursor: (!canBet || selectedBet === null) ? 'not-allowed' : 'pointer'
          }}
        >
          Place Bet: ${selectedBet || 0}
        </ThemedButton>
      </motion.div>

      <AnimatePresence>
        {!canBet && selectedBet && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ color: '#ff6b6b', marginTop: '1rem' }}
          >
            Insufficient chips for this bet
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default BettingStage;
