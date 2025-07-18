import React, { useEffect } from 'react';
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

const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  width: 100%;
  max-width: 800px;
`;

const PlayerResult = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid ${props => 
    props.winner ? '#4CAF50' : 
    props.isCurrentPlayer ? '#2196F3' : 
    'rgba(255, 255, 255, 0.3)'};
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  color: white;
`;

const WinnerBadge = styled(motion.div)`
  background: linear-gradient(45deg, #4CAF50, #45a049);
  color: white;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  display: inline-block;
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.4);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 1rem;
  font-size: 0.9rem;
`;

const StatItem = styled.div`
  padding: 0.25rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const TotalStats = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  text-align: center;
  color: white;
  max-width: 400px;
`;

const ResultsStage = ({ gameState, onAction, currentPlayer }) => {
  const playSound = useSound();
  const { roundResults, gameOver, winner, players } = gameState;
  
  useEffect(() => {
    // Play appropriate celebration sound
    if (winner) {
      if (currentPlayer && winner.id === currentPlayer.id) {
        playSound('gameWin');
      } else {
        playSound('roundEnd');
      }
    } else {
      playSound('roundEnd');
    }
  }, [winner, currentPlayer, playSound]);

  const sortedPlayers = [...(players || [])].sort((a, b) => {
    if (gameOver) {
      return b.totalWinnings - a.totalWinnings;
    }
    return (b.roundWinnings || 0) - (a.roundWinnings || 0);
  });

  const handleNextRound = () => {
    playSound('buttonClick');
    onAction(ACTIONS.NEXT_ROUND);
  };

  const handleNewGame = () => {
    playSound('buttonClick');
    onAction(ACTIONS.NEW_GAME);
  };

  const handleLeaveGame = () => {
    playSound('buttonClick');
    onAction(ACTIONS.LEAVE_GAME);
  };

  return (
    <Container>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ color: 'white', marginBottom: '1rem', textAlign: 'center' }}
      >
        {gameOver ? '🎉 Game Over! 🎉' : '📊 Round Results 📊'}
      </motion.h2>

      <AnimatePresence>
        {winner && (
          <motion.div style={{ textAlign: 'center' }}>
            <WinnerBadge
              initial={{ scale: 0, rotate: -180, y: -100 }}
              animate={{ 
                scale: [0, 1.2, 1],
                rotate: [180, 0, 5, -5, 0],
                y: 0
              }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 10,
                duration: 1.5
              }}
            >
              🏆 {winner.name} Wins! 🏆
            </WinnerBadge>
            
            {/* Celebration particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0,
                  scale: 0,
                  x: 0,
                  y: 0
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0.5],
                  x: Math.random() * 400 - 200,
                  y: Math.random() * 300 - 150,
                  rotate: Math.random() * 360
                }}
                transition={{
                  duration: 2,
                  delay: 0.5 + i * 0.1,
                  ease: "easeOut"
                }}
                style={{
                  position: 'absolute',
                  width: '10px',
                  height: '10px',
                  background: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'][i % 5],
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <ResultsContainer>
        {sortedPlayers.map((player, index) => (
          <PlayerResult
            key={player.id}
            winner={winner && winner.id === player.id}
            isCurrentPlayer={currentPlayer && currentPlayer.id === player.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: 90 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              rotateY: 0,
              scale: winner && winner.id === player.id ? [1, 1.05, 1] : 1
            }}
            transition={{ 
              delay: index * 0.2,
              type: "spring",
              stiffness: 150,
              scale: { 
                duration: 1, 
                repeat: winner && winner.id === player.id ? 3 : 0,
                repeatType: "reverse"
              }
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
            }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              {winner && winner.id === player.id ? '👑 ' : ''}{player.name}
            </motion.h3>
            <motion.div 
              style={{ fontSize: '1.2rem', fontWeight: 'bold' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.4 }}
            >
              Position: {player.position + 1}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.5 }}
            >
              <StatsGrid>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                >
                  <StatItem>
                    <strong>Chips:</strong><br />
                    {player.chips}
                  </StatItem>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                >
                  <StatItem>
                    <strong>Round Win:</strong><br />
                    ${player.roundWinnings || 0}
                  </StatItem>
                </motion.div>
                {gameOver && (
                  <>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                    >
                      <StatItem>
                        <strong>Total Win:</strong><br />
                        ${player.totalWinnings || 0}
                      </StatItem>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                    >
                      <StatItem>
                        <strong>Rounds Won:</strong><br />
                        {player.roundsWon || 0}
                      </StatItem>
                    </motion.div>
                  </>
                )}
              </StatsGrid>
            </motion.div>

            {player.finalHand && player.finalHand.length > 0 && (
              <motion.div 
                style={{ marginTop: '1rem', fontSize: '0.8rem' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.6 }}
              >
                <strong>Final Hand:</strong><br />
                {player.finalHand.map(card => `${card.value}${card.suit}`).join(', ')}
              </motion.div>
            )}
          </PlayerResult>
        ))}
      </ResultsContainer>

      <AnimatePresence>
        {roundResults && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
          >
            <TotalStats>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                📈 Round Statistics 📈
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              >
                Total Pot: ${roundResults.totalPot || 0}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                Cards Played: {roundResults.cardsPlayed || 0}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 }}
              >
                Storm Events: {roundResults.stormEvents || 0}
              </motion.div>
            </TotalStats>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        {!gameOver ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ThemedButton onClick={handleNextRound} size="large">
              ▶️ Next Round
            </ThemedButton>
          </motion.div>
        ) : (
          <>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThemedButton onClick={handleNewGame} size="large">
                🎮 New Game
              </ThemedButton>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThemedButton 
                onClick={handleLeaveGame} 
                variant="secondary" 
                size="large"
              >
                🚪 Leave Game
              </ThemedButton>
            </motion.div>
          </>
        )}
      </motion.div>
    </Container>
  );
};

export default ResultsStage;
