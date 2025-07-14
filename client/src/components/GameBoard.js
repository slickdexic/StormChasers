/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useGame } from '../contexts/GameContext';
import EnhancedPlayerCardHeader from './EnhancedPlayerCardHeader';
import PlayingCard, { CardHand, CardStack } from './PlayingCard';
import GameCoin, { CoinCollection } from './GameCoin';
import RaceTrack from './RaceTrack';
import { DiceRoller } from './GameDice';

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const slideInFromRight = keyframes`
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 10px rgba(0, 212, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.6), 0 0 30px rgba(0, 212, 255, 0.2); }
`;

const GameContainer = styled.div`
  min-height: 100vh;
  padding-top: 140px; /* Account for fixed header */
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 56, 56, 0.05) 0%, transparent 50%),
    linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  ${css`animation: ${fadeIn} 0.8s ease-out;`}
`;

const StageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  ${css`animation: ${fadeIn} 0.6s ease-out;`}
`;

const StageTitle = styled.h1`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  color: #00d4ff;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 
    0 0 20px #00d4ff,
    0 0 40px rgba(0, 212, 255, 0.5);
  ${css`animation: ${pulseGlow} 3s ease-in-out infinite;`}
`;

const StageDescription = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

// Dealer Selection Stage Components
const DealerSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const CardSelectionArea = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  min-height: 400px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
`;

const DealerCardSlot = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 5px; /* Add padding to prevent overlap */
  box-sizing: border-box;
`;

const SelectionStatus = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 1.5rem 2rem;
  border-radius: 15px;
  border: 2px solid rgba(255, 215, 0, 0.5);
  color: white;
  text-align: center;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  ${css`animation: ${slideInFromRight} 0.5s ease-out;`}
`;

const SelectedCardOverlay = styled.div`
  position: absolute;
  top: -30px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
`;

const PlayerLabel = styled.div`
  color: ${props => props.color || '#fff'};
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px ${props => props.color || '#fff'};
`;

const DealerBadge = styled.div`
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
  animation: ${slideInFromRight} 0.5s ease-out, pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const WinningCardAnimation = styled.div`
  animation: winnerGlow 3s ease-in-out;
  transform-origin: center;
  
  @keyframes winnerGlow {
    0% { 
      transform: scale(1); 
      filter: brightness(1);
      box-shadow: 0 0 0 rgba(255, 215, 0, 0);
    }
    50% { 
      transform: scale(1.3); 
      filter: brightness(1.8) saturate(1.5);
      box-shadow: 0 0 50px rgba(255, 215, 0, 0.9), 0 0 100px rgba(255, 215, 0, 0.6);
    }
    100% { 
      transform: scale(1.1); 
      filter: brightness(1.4) saturate(1.2);
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.4);
    }
  }
`;

const CardFlipContainer = styled.div`
  perspective: 1000px;
  width: 80px; /* Fixed width to match medium card size */
  height: 112px; /* Fixed height to match medium card size */
  min-height: 112px;
  position: relative;
  box-sizing: border-box;
`;

const FlippingCard = styled.div`
  position: relative;
  width: 80px; /* Fixed width to match medium card size */
  height: 112px; /* Fixed height to match medium card size */
  min-height: 112px;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-style: preserve-3d;
  transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  box-sizing: border-box;
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
`;

const CardBack = styled(CardFace)`
  transform: rotateY(0deg);
`;

const CardFront = styled(CardFace)`
  transform: rotateY(180deg);
`;

const ContinueButton = styled.button`
  padding: 20px 40px;
  background: linear-gradient(45deg, #00ff88, #00d4ff);
  border: none;
  border-radius: 15px;
  color: #000;
  font-family: 'Orbitron', monospace;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 255, 136, 0.4);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 255, 136, 0.6);
    background: linear-gradient(45deg, #00d4ff, #00ff88);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const DealerAnnouncement = styled.div`
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

const WinningCardDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 2px solid rgba(255, 215, 0, 0.4);
  
  h4 {
    color: #ffd700;
    font-size: 1.2rem;
    margin: 0;
  }
`;

const DealerName = styled.div`
  color: #ffd700;
  font-size: 1.4rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const SelectedCardsDisplay = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const SelectedCardResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

const PlayerName = styled.div`
  color: ${props => props.color === 'black' ? 'white' : props.color};
  font-weight: bold;
  font-size: 0.9rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

const DealerIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffd700;
  font-weight: bold;
  text-align: center;
  
  span {
    font-size: 0.8rem;
    margin-bottom: 0.25rem;
  }
  
  small {
    font-size: 0.7rem;
    opacity: 0.8;
  }
`;

// Storm Stage Components
const StormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  animation: ${fadeIn} 0.6s ease-out;
  position: relative;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const CardDealingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

const DealingMessage = styled.div`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
  
  small {
    color: #00d4ff;
    font-size: 1rem;
    font-weight: 400;
  }
`;

const DealingProgress = styled.div`
  width: 300px;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid rgba(0, 212, 255, 0.3);
`;

const GamePlayArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const DiscardPileArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  padding: 2rem;
  min-height: 200px;
`;

const StockPileLabel = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

const PlayerHandArea = styled.div`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
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
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  color: #00d4ff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

// Lane Selection Stage Components
const LaneSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const LaneGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 800px;
  width: 100%;
`;

const LaneOption = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 3px solid ${props => props.selected ? '#00d4ff' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #00d4ff;
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
  }
  
  ${props => props.selected && css`
    background: rgba(0, 212, 255, 0.1);
    animation: ${pulseGlow} 2s ease-in-out infinite;
  `}
`;

const LaneNumber = styled.div`
  font-family: 'Orbitron', monospace;
  font-size: 3rem;
  font-weight: bold;
  color: #00d4ff;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px #00d4ff;
`;

const LaneDescription = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.1rem;
  line-height: 1.4;
`;

// Coin Stage Components
const CoinStageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CoinPlacementArea = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  min-height: 300px;
`;

// Racing Stage Components
const RacingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const RaceControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  padding: 15px 30px;
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

const DiceContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

function GameBoard() {
  const { 
    currentRoom, 
    player, 
    gameState, 
    socket,
    leaveRoom,
    selectDealerCard,
    cardDealingAnimation,
    discardCardDealt
    // Game actions would be added here
  } = useGame();
  
  const [selectedLane, setSelectedLane] = useState(null);
  const [lastDiceRoll, setLastDiceRoll] = useState([1, 1]);

  const currentStage = currentRoom?.gameState?.currentStage || 'lobby';
  const players = currentRoom?.players || [];

  // Mock data for demonstration
  const playerHand = [
    { rank: 'A', suit: 'hearts' },
    { rank: 'Q', suit: 'spades' },
    { rank: '7', suit: 'diamonds' },
    { rank: 'K', suit: 'clubs' },
    { rank: '9', suit: 'hearts' }
  ];

  const discardPile = [
    { rank: '8', suit: 'spades' }
  ];

  const playerCoins = [
    { type: 'gold', value: 5 },
    { type: 'gold', value: 3 },
    { type: 'silver', value: 2 },
    { type: 'bronze', value: 1 }
  ];

  const mockPositions = {
    [player?.id]: 12,
    // Other players would have their positions
  };

  const rollDice = () => {
    const newValues = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
    ];
    setLastDiceRoll(newValues);
  };

  const handleDiceRoll = (values) => {
    setLastDiceRoll(values);
    // Here you would emit the dice roll to the server
    console.log('Dice rolled:', values);
  };

  const handleDealerCardSelection = (cardIndex) => {
    // Only allow selection if it's the player's turn
    if (currentRoom?.gameState?.currentPlayer !== player?.id) {
      return;
    }
    
    // Emit dealer card selection to server
    if (socket) {
      socket.emit('select-dealer-card', { cardIndex });
    }
  };

  const renderStage = () => {
    switch (currentStage) {
      case 'dealer-selection':
        const dealerCards = currentRoom?.gameState?.dealerSelectionCards || [];
        const selectedCards = currentRoom?.gameState?.selectedDealerCards || new Map();
        const dealerPlayer = currentRoom?.players?.find(p => p.dealerButton);
        const allPlayersSelected = currentRoom?.players?.every(p => p.selectedDealerCard !== null);
        
        return (
          <DealerSelectionContainer>
            <StageTitle>Dealer Selection</StageTitle>
            <StageDescription>
              Players take turns selecting one face-down card. 
              The player with the lowest card becomes the first dealer.
            </StageDescription>
            
            <CardSelectionArea>
              {dealerCards.map((card, i) => {
                const isSelected = card.selected;
                const selectedBy = card.selectedBy;
                const selectedPlayer = selectedBy ? currentRoom?.players?.find(p => p.id === selectedBy) : null;
                const isWinning = dealerPlayer && selectedBy === dealerPlayer.id;
                
                return (
                  <DealerCardSlot key={i}>
                    <CardFlipContainer>
                      <FlippingCard isFlipped={isSelected}>
                        <CardBack>
                          <PlayingCard
                            isBack={true}
                            size="medium"
                            interactive={!isSelected && currentRoom?.gameState?.currentPlayer === player?.id}
                            isPlayable={!isSelected && currentRoom?.gameState?.currentPlayer === player?.id}
                            onClick={() => !isSelected && handleDealerCardSelection(i)}
                          />
                        </CardBack>
                        <CardFront>
                          {isWinning ? (
                            <WinningCardAnimation>
                              <PlayingCard
                                rank={card.rank}
                                suit={card.suit}
                                size="medium"
                                interactive={false}
                              />
                            </WinningCardAnimation>
                          ) : (
                            <PlayingCard
                              rank={card.rank}
                              suit={card.suit}
                              size="medium"
                              interactive={false}
                            />
                          )}
                        </CardFront>
                      </FlippingCard>
                    </CardFlipContainer>
                    
                    {isSelected && selectedPlayer && (
                      <SelectedCardOverlay>
                        <PlayerLabel color={selectedPlayer.color === 'black' ? '#fff' : selectedPlayer.color}>
                          {selectedPlayer.name}
                        </PlayerLabel>
                        {isWinning && (
                          <DealerBadge>
                            DEALER
                          </DealerBadge>
                        )}
                      </SelectedCardOverlay>
                    )}
                  </DealerCardSlot>
                );
              })}
            </CardSelectionArea>
            
            {dealerPlayer && allPlayersSelected ? (
              <DealerAnnouncement>
                <h3>🏆 Dealer Selection Results</h3>
                
                {/* Show all selected cards in a row */}
                <SelectedCardsDisplay>
                  {currentRoom?.players?.map((p, index) => (
                    p.selectedDealerCard && (
                      <SelectedCardResult key={p.id}>
                        <PlayerName color={p.color}>{p.name}</PlayerName>
                        <PlayingCard
                          rank={p.selectedDealerCard.rank}
                          suit={p.selectedDealerCard.suit}
                          size="medium"
                          style={{
                            boxShadow: p.dealerButton ? '0 0 20px rgba(255, 215, 0, 0.8)' : 'none',
                            border: p.dealerButton ? '3px solid #ffd700' : 'none'
                          }}
                        />
                        {p.dealerButton && (
                          <DealerIndicator>
                            <span>🏆 DEALER</span>
                            <small>Lowest Card</small>
                          </DealerIndicator>
                        )}
                      </SelectedCardResult>
                    )
                  ))}
                </SelectedCardsDisplay>
                
                <p style={{ marginTop: '1.5rem', fontSize: '1.2rem' }}>
                  <strong>{dealerPlayer.name}</strong> becomes the first dealer!
                </p>
                
                {currentRoom?.host?.id === player?.id && (
                  <ContinueButton onClick={() => socket?.emit('continue-to-storm')}>
                    Continue to Storm Stage
                  </ContinueButton>
                )}
                {currentRoom?.host?.id !== player?.id && (
                  <p style={{ color: '#00d4ff', fontSize: '1rem' }}>
                    Waiting for host to continue...
                  </p>
                )}
              </DealerAnnouncement>
            ) : (
              <SelectionStatus>
                {currentRoom?.gameState?.currentPlayer === player?.id 
                  ? "Your turn - select a card!" 
                  : `Waiting for ${currentRoom?.players?.find(p => p.id === currentRoom?.gameState?.currentPlayer)?.name || 'player'} to select a card...`}
              </SelectionStatus>
            )}
          </DealerSelectionContainer>
        );

      case 'storm':
        return (
          <StormContainer>
            {/* Card Dealing Animation Overlay */}
            {cardDealingAnimation && (
              <CardDealingOverlay>
                <DealingMessage>
                  Dealing card {cardDealingAnimation.cardIndex + 1} of {cardDealingAnimation.totalCards}
                  <br />
                  <strong>to {cardDealingAnimation.playerName}</strong>
                  <br />
                  <small>Player {cardDealingAnimation.dealingToPlayer} of {cardDealingAnimation.totalPlayers}</small>
                </DealingMessage>
                <DealingProgress>
                  <div 
                    style={{ 
                      width: `${((cardDealingAnimation.cardIndex + 1) / cardDealingAnimation.totalCards) * 100}%`,
                      background: 'linear-gradient(45deg, #00d4ff, #0099cc)',
                      height: '100%',
                      borderRadius: '10px',
                      transition: 'width 0.3s ease'
                    }} 
                  />
                </DealingProgress>
              </CardDealingOverlay>
            )}
            
            {/* Discard Card Dealing Animation */}
            {discardCardDealt && (
              <CardDealingOverlay>
                <DealingMessage>
                  <strong>Turning over first card for discard pile...</strong>
                  <br />
                  <PlayingCard
                    rank={discardCardDealt.card.rank}
                    suit={discardCardDealt.card.suit}
                    size="large"
                    style={{ marginTop: '1rem' }}
                  />
                </DealingMessage>
              </CardDealingOverlay>
            )}
            
            <GamePlayArea>
              <StageTitle>Storm Stage</StageTitle>
              
              <DiscardPileArea>
                <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Discard Pile on LEFT */}
                  <div style={{ textAlign: 'center' }}>
                    <h4 style={{ color: 'white', marginBottom: '1rem' }}>Discard Pile</h4>
                    <PlayingCard
                      rank={currentRoom?.gameState?.topCard?.rank || '8'}
                      suit={currentRoom?.gameState?.topCard?.suit || 'spades'}
                      size="large"
                    />
                  </div>
                  
                  {/* Stock Pile on RIGHT */}
                  <div style={{ textAlign: 'center' }}>
                    <StockPileLabel>
                      <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold' }}>
                        Draw {currentRoom?.gameState?.toxicSevenDrawCount || 1}
                      </div>
                      <div style={{ color: '#00d4ff', fontSize: '0.9rem' }}>
                        {currentRoom?.gameState?.deckSize || 20} cards
                      </div>
                    </StockPileLabel>
                    <CardStack 
                      cards={Array(Math.min(currentRoom?.gameState?.deckSize || 20, 8)).fill({})} 
                      size="large" 
                    />
                  </div>
                </div>
              </DiscardPileArea>
              
              <PlayerHandArea>
                <h4 style={{ color: 'white', marginBottom: '1rem', textAlign: 'center' }}>
                  Your Hand
                </h4>
                <CardHand
                  cards={player?.cards || []}
                  size="large"
                  interactive={true}
                  playableCards={[]} // Will be calculated based on game rules
                />
              </PlayerHandArea>
            </GamePlayArea>
          </StormContainer>
        );

      case 'lane-selection':
        return (
          <LaneSelectionContainer>
            <StageTitle>Lane Selection</StageTitle>
            <StageDescription>
              Choose your starting lane for the race. Lane 1 starts first but is most crowded.
            </StageDescription>
            
            <LaneGrid>
              {[1, 2, 3, 4].map(lane => (
                <LaneOption
                  key={lane}
                  selected={selectedLane === lane}
                  onClick={() => setSelectedLane(lane)}
                >
                  <LaneNumber>{lane}</LaneNumber>
                  <LaneDescription>
                    {lane === 1 && "Inside lane - Shortest distance"}
                    {lane === 2 && "Second lane - Good balance"}
                    {lane === 3 && "Third lane - Less congestion"}
                    {lane === 4 && "Outside lane - Most room"}
                  </LaneDescription>
                </LaneOption>
              ))}
            </LaneGrid>
            
            {selectedLane && (
              <ActionButton>
                Confirm Lane {selectedLane}
              </ActionButton>
            )}
          </LaneSelectionContainer>
        );

      case 'coin-stage':
        return (
          <CoinStageContainer>
            <StageTitle>Coin Placement</StageTitle>
            <StageDescription>
              Place your coins on the track to affect movement and strategy.
            </StageDescription>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
              <CoinPlacementArea>
                <RaceTrack
                  players={players}
                  playerPositions={mockPositions}
                  showPositionMarkers={true}
                />
              </CoinPlacementArea>
              
              <SidebarSection>
                <SectionTitle>Your Coins</SectionTitle>
                <CoinCollection
                  coins={playerCoins}
                  size="large"
                  interactive={true}
                  groupByType={true}
                />
              </SidebarSection>
            </div>
          </CoinStageContainer>
        );

      case 'racing':
        return (
          <RacingContainer>
            <StageTitle>Racing Stage</StageTitle>
            <StageDescription>
              Roll dice and race to victory! Use strategy and luck to cross the finish line first.
            </StageDescription>
            
            <RaceTrack
              players={players}
              currentLap={1}
              totalLaps={currentRoom?.settings?.numberOfLaps || 3}
              playerPositions={mockPositions}
              speed={lastDiceRoll.reduce((a, b) => a + b, 0) * 10}
            />
            
            <DiceContainer>
              <DiceRoller 
                numberOfDice={currentRoom?.settings?.numberOfDice || 1}
                size="large"
                onRoll={handleDiceRoll}
              />
            </DiceContainer>
            
            <RaceControls>
              <ActionButton>Move Forward</ActionButton>
              <ActionButton>Use Card</ActionButton>
              <ActionButton>Pit Stop</ActionButton>
            </RaceControls>
          </RacingContainer>
        );

      default:
        return (
          <div style={{ textAlign: 'center', padding: '4rem' }}>
            <StageTitle>Game Starting...</StageTitle>
            <StageDescription>
              Preparing the race. Please wait for all players to be ready.
            </StageDescription>
            <ActionButton onClick={leaveRoom}>
              Return to Lobby
            </ActionButton>
          </div>
        );
    }
  };

  return (
    <GameContainer>
      <EnhancedPlayerCardHeader 
        players={players}
        currentPlayer={currentRoom?.gameState?.currentPlayer}
        gameStage={currentStage}
      />
      
      <StageContainer>
        {renderStage()}
      </StageContainer>
    </GameContainer>
  );
}

export default GameBoard;
