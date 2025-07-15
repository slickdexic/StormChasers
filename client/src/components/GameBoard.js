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

const cardFly = keyframes`
  0% { 
    transform: scale(1.3) translateY(0px) rotate(0deg); 
    filter: drop-shadow(0 10px 20px rgba(0, 212, 255, 0.5));
  }
  50% { 
    transform: scale(1.4) translateY(-10px) rotate(5deg); 
    filter: drop-shadow(0 15px 25px rgba(0, 212, 255, 0.7));
  }
  100% { 
    transform: scale(1.3) translateY(0px) rotate(0deg); 
    filter: drop-shadow(0 10px 20px rgba(0, 212, 255, 0.5));
  }
`;

// GameDevGuide compliant - 0.3s card dealing animations
const flyToPlayer1 = keyframes`
  0% { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% { 
    transform: translate(-50%, -50%) translateY(300px) scale(0.7);
    opacity: 0.8;
  }
`;

const flyToPlayer2 = keyframes`
  0% { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% { 
    transform: translate(-50%, -50%) translateX(400px) scale(0.7);
    opacity: 0.8;
  }
`;

const flyToPlayer3 = keyframes`
  0% { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% { 
    transform: translate(-50%, -50%) translateY(-300px) scale(0.7);
    opacity: 0.8;
  }
`;

const flyToPlayer4 = keyframes`
  0% { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% { 
    transform: translate(-50%, -50%) translateX(-400px) scale(0.7);
    opacity: 0.8;
  }
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

const DiceSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  
  h3 {
    color: #ffd700;
    margin: 0;
    font-size: 1.5rem;
  }
`;

const DiceTypeButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
  
  &:hover {
    background: linear-gradient(135deg, #00b8e6, #007399);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  strong {
    font-size: 1.2rem;
  }
  
  small {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.8rem;
  }
`;

const MovementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  
  h3 {
    color: #ffd700;
    margin: 0;
    font-size: 1.5rem;
  }
  
  p {
    color: #fff;
    margin: 0;
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

const StormResultsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: ${fadeIn} 0.3s ease-out;
`;

const StormResultsModal = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%);
  border: 3px solid #ffd700;
  border-radius: 20px;
  padding: 3rem;
  min-width: 500px;
  max-width: 600px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);

  h2 {
    color: #ffd700;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }
`;

const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ResultItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.5rem;
  align-items: center;
  padding: 1rem 1.5rem;
  background: ${props => 
    props.$position === 1 ? 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)' :
    props.$position === 2 ? 'linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 100%)' :
    props.$position === 3 ? 'linear-gradient(135deg, #cd7f32 0%, #e6a85c 100%)' :
    'linear-gradient(135deg, #4a4a4a 0%, #6a6a6a 100%)'
  };
  color: ${props => props.$position <= 3 ? '#000' : '#fff'};
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.1rem;

  .position {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .player-name {
    text-align: left;
  }

  .card-count {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

const WaitingMessage = styled.div`
  color: #ffd700;
  font-size: 1.1rem;
  font-style: italic;
  opacity: 0.8;
`;

function GameBoard() {
  const { 
    currentRoom, 
    player, 
    gameState, 
    socket,
    leaveRoom,
    selectDealerCard,
    drawCards,
    playCard,
    stormResults,
    continueToNextStage,
    placeCoin,
    continueToRacing,
    selectLane,
    rollDice,
    chooseMovement
    // Game actions would be added here
  } = useGame();
  
  const [selectedLane, setSelectedLane] = useState(null);
  const [lastDiceRoll, setLastDiceRoll] = useState([1, 1]);
  const [selectedQueenCard, setSelectedQueenCard] = useState(null);
  const [queenSelectingPlayer, setQueenSelectingPlayer] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const currentStage = currentRoom?.gameState?.currentStage || 'lobby';
  
  // Debug logging for stage changes
  console.log('🎯 GameBoard currentStage:', currentStage);
  console.log('🎯 GameBoard room data:', currentRoom?.name, currentRoom?.gameState?.stormRound);
  
  const players = currentRoom?.players || [];

  // Ensure players have proper card count data for the header display
  const playersWithCardCount = players.map(p => ({
    ...p,
    cardCount: p.cardCount || p.cards?.length || 0
  }));

  // Check if current player is the host
  const isHost = currentRoom?.host?.id === player?.id;

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

  // Get player's coins from room data
  const playerCoins = player?.drawnCoins || [];

  const mockPositions = {
    [player?.id]: 12,
    // Other players would have their positions
  };

  const rollLocalDice = () => {
    const newValues = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
    ];
    setLastDiceRoll(newValues);
  };

  const handleDiceRoll = (values, diceType = 'movement') => {
    setLastDiceRoll(values);
    // Send dice roll to server
    rollDice(diceType);
    console.log('Dice rolled:', values, 'type:', diceType);
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
                
                {/* Show all selected cards in a row - GameDevGuide compliance */}
                <SelectedCardsDisplay>
                  {currentRoom?.players?.map((p, index) => (
                    p.selectedDealerCard && (
                      <SelectedCardResult key={p.id}>
                        <PlayerName color={p.color === 'black' ? 'white' : p.color}>{p.name}</PlayerName>
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
                            <small>Lowest Card (7 low, Ace high)</small>
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
        // Check if Storm is complete (all players have finishing order)
        const stormComplete = currentRoom?.players?.every(p => p.stormFinishOrder !== null);
        
        if (stormComplete) {
          // Show Storm results
          const sortedPlayers = [...(currentRoom?.players || [])].sort((a, b) => a.stormFinishOrder - b.stormFinishOrder);
          
          return (
            <StormContainer>
              <GamePlayArea>
                <StageTitle>🏆 Storm Results</StageTitle>
                
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '15px', padding: '2rem', margin: '2rem auto', maxWidth: '600px' }}>
                  <h3 style={{ color: 'white', textAlign: 'center', marginBottom: '1.5rem' }}>Final Rankings</h3>
                  
                  {sortedPlayers.map((p, index) => (
                    <div key={p.id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1rem',
                      background: index === 0 ? 'rgba(255,215,0,0.2)' : 'rgba(255,255,255,0.05)',
                      borderRadius: '10px',
                      marginBottom: '0.5rem',
                      border: index === 0 ? '2px solid gold' : '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          background: p.stormFinishOrder === 1 ? 'gold' : p.stormFinishOrder === 2 ? 'silver' : p.stormFinishOrder === 3 ? '#cd7f32' : '#666',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          color: 'white'
                        }}>
                          {p.stormFinishOrder}
                        </div>
                        <span style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold' }}>{p.name}</span>
                      </div>
                      <div style={{ color: '#00d4ff', fontSize: '0.9rem' }}>
                        {p.stormFinishOrder === 1 ? '🏆 Winner!' : 
                         p.stormFinishOrder === 2 ? '🥈 Second Place' :
                         p.stormFinishOrder === 3 ? '🥉 Third Place' : '4th Place'}
                      </div>
                    </div>
                  ))}
                </div>
                
                {player?.isHost ? (
                  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <ContinueButton onClick={() => {
                      console.log(`🎯 Continuing to next stage from Storm round ${currentRoom?.gameState?.stormRound}`);
                      // Use the game context continue function
                      continueToNextStage();
                    }}>
                      Continue to {currentRoom?.gameState?.stormRound === 1 ? 'Lane Selection' : 'Coin Stage'}
                    </ContinueButton>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', marginTop: '2rem', color: 'white' }}>
                    <p>🕒 Waiting for host to continue...</p>
                  </div>
                )}
              </GamePlayArea>
            </StormContainer>
          );
        }
        
        return (
          <StormContainer>
            <GamePlayArea>
              <StageTitle>Storm Stage</StageTitle>
              
              <DiscardPileArea>
                <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', justifyContent: 'center' }}>
                  {/* Discard Pile on LEFT */}
                  <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                    <h4 style={{ color: 'white', marginBottom: '1rem' }}>Discard Pile</h4>
                    <PlayingCard
                      rank={currentRoom?.gameState?.topCard?.rank || '8'}
                      suit={currentRoom?.gameState?.topCard?.suit || 'spades'}
                      size="large"
                    />
                    
                    {/* Queen called suit display */}
                    {currentRoom?.gameState?.topCard?.rank === 'Q' && 
                     currentRoom?.gameState?.currentSuit && (
                      <div style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        pointerEvents: 'none',
                        zIndex: 5
                      }}>
                        {/* Q and suit in top left corner */}
                        <div style={{
                          position: 'absolute',
                          top: '8px',
                          left: '8px',
                          background: 'rgba(255,255,255,0.9)',
                          borderRadius: '4px',
                          padding: '2px 6px',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                          color: '#333'
                        }}>
                          Q{currentRoom.gameState.topCard.suit === 'hearts' ? '♥️' : 
                            currentRoom.gameState.topCard.suit === 'diamonds' ? '♦️' : 
                            currentRoom.gameState.topCard.suit === 'spades' ? '♠️' : '♣️'}
                        </div>
                        {/* Large called suit symbol in middle */}
                        <div style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          fontSize: '3rem',
                          textShadow: '0 0 4px rgba(0,0,0,0.5)'
                        }}>
                          {currentRoom.gameState.currentSuit === 'hearts' ? '♥️' : 
                           currentRoom.gameState.currentSuit === 'diamonds' ? '♦️' : 
                           currentRoom.gameState.currentSuit === 'spades' ? '♠️' : '♣️'}
                        </div>
                      </div>
                    )}
                    
                    {/* Queen suit selection chat bubble */}
                    {selectedQueenCard && 
                     queenSelectingPlayer === player?.id && (
                      <div style={{
                        position: 'absolute',
                        left: '-120px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'white',
                        border: '2px solid #333',
                        borderRadius: '15px',
                        padding: '10px',
                        minWidth: '100px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                        zIndex: 10
                      }}>
                        <div style={{ color: '#333', fontWeight: 'bold', marginBottom: '8px', fontSize: '0.9rem' }}>
                          Call Suit:
                        </div>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                          {['hearts', 'diamonds', 'spades', 'clubs'].map(suit => (
                            <button
                              key={suit}
                              onClick={() => {
                                // Call the suit for the Queen
                                console.log('👸 Playing Queen with suit:', suit, 'Card ID:', selectedQueenCard.id);
                                playCard(selectedQueenCard.id, suit);
                                setSelectedQueenCard(null); // Clear selection
                                setQueenSelectingPlayer(null); // Clear player tracking
                              }}
                              style={{
                                background: 'none',
                                border: '1px solid #333',
                                borderRadius: '4px',
                                padding: '4px',
                                cursor: 'pointer',
                                fontSize: '20px'
                              }}
                            >
                              {suit === 'hearts' ? '♥️' : 
                               suit === 'diamonds' ? '♦️' : 
                               suit === 'spades' ? '♠️' : '♣️'}
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={() => {
                            setSelectedQueenCard(null);
                            setQueenSelectingPlayer(null);
                          }}
                          style={{
                            marginTop: '8px',
                            background: '#ff4444',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            width: '100%'
                          }}
                        >
                          Cancel
                        </button>
                        {/* Chat bubble arrow */}
                        <div style={{
                          position: 'absolute',
                          right: '-10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: 0,
                          height: 0,
                          borderTop: '10px solid transparent',
                          borderBottom: '10px solid transparent',
                          borderLeft: '10px solid white'
                        }} />
                      </div>
                    )}
                  </div>
                  
                  {/* Stock Pile on RIGHT */}
                  <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ 
                        color: currentRoom?.gameState?.toxicSevenCount > 0 ? '#ff4444' : 'white', 
                        fontSize: '1.1rem', 
                        fontWeight: 'bold',
                        textShadow: currentRoom?.gameState?.toxicSevenCount > 0 ? '0 0 10px #ff4444' : 'none'
                      }}>
                        Draw {currentRoom?.gameState?.toxicSevenCount > 0 ? (currentRoom.gameState.toxicSevenCount * 2) : 1}
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                        {currentRoom?.gameState?.deckSize || 0} cards remaining
                      </div>
                    </div>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <PlayingCard
                        isBack={true}
                        size="large"
                        interactive={currentRoom?.gameState?.currentPlayer === player?.id}
                        onClick={() => {
                          if (currentRoom?.gameState?.currentPlayer === player?.id) {
                            drawCards();
                          }
                        }}
                        style={{ 
                          cursor: currentRoom?.gameState?.currentPlayer === player?.id ? 'pointer' : 'default',
                          filter: currentRoom?.gameState?.toxicSevenCount > 0 ? 'sepia(1) hue-rotate(320deg) saturate(2)' : 'none',
                          boxShadow: currentRoom?.gameState?.toxicSevenCount > 0 ? '0 0 20px #ff4444' : 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </DiscardPileArea>
              
              <PlayerHandArea>
                <h4 style={{ 
                  color: currentRoom?.gameState?.currentPlayer === player?.id ? '#00d4ff' : 'white', 
                  marginBottom: '1rem', 
                  textAlign: 'center',
                  fontSize: currentRoom?.gameState?.currentPlayer === player?.id ? '1.3rem' : '1rem',
                  textShadow: currentRoom?.gameState?.currentPlayer === player?.id ? '0 0 10px #00d4ff' : 'none',
                  transition: 'all 0.3s ease'
                }}>
                  Your Hand ({player?.cards?.length || 0} cards)
                  {currentRoom?.gameState?.currentPlayer === player?.id && (
                    <span style={{ display: 'block', fontSize: '0.9rem', color: '#00d4ff', marginTop: '0.5rem' }}>
                      🎯 YOUR TURN
                    </span>
                  )}
                </h4>
                <div style={{
                  transform: currentRoom?.gameState?.currentPlayer === player?.id ? 'scale(1.4)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                  filter: currentRoom?.gameState?.currentPlayer === player?.id ? 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.5))' : 'none'
                }}>
                  <CardHand
                    cards={player?.cards || []}
                    size="large"
                    interactive={currentRoom?.gameState?.currentPlayer === player?.id}
                    playableCards={player?.cards || []} // For now, all cards are playable
                  onCardClick={(card) => {
                    if (currentRoom?.gameState?.currentPlayer === player?.id) {
                      console.log('🃏 Card clicked:', card);
                      console.log('🃏 Card structure:', JSON.stringify(card, null, 2));
                      
                      // Always use the card's unique ID - cards should have IDs from server
                      if (card && card.id) {
                        console.log('✅ Playing card with ID:', card.id);
                        
                        // Special handling for Queen - needs suit selection (unless two-player endgame)
                        if (card.rank === 'Q') {
                          // Check if this is two-player endgame (only 2 players left without finish order)
                          const remainingPlayers = currentRoom?.players?.filter(p => !p.stormFinishOrder) || [];
                          const isLastCard = player?.cards?.length === 1;
                          const isTwoPlayerEndgame = remainingPlayers.length === 2 && isLastCard;
                          
                          if (isTwoPlayerEndgame) {
                            console.log('👸 Two-player endgame: Queen can be played without suit selection');
                            playCard(card.id); // No suit selection needed
                          } else {
                            console.log('👸 Queen selected - showing suit selection');
                            setSelectedQueenCard(card);
                            setQueenSelectingPlayer(player?.id);
                          }
                        } else {
                          // Normal card play
                          playCard(card.id);
                        }
                      } else {
                        console.log('❌ Card missing ID or invalid card object:', card);
                        console.log('❌ Player cards:', player?.cards);
                        // This shouldn't happen if server is working correctly
                        alert('Card is missing ID - this is a bug. Please refresh.');
                      }
                    } else {
                      console.log('❌ Not your turn, current player:', currentRoom?.gameState?.currentPlayer);
                      console.log('❌ Your player ID:', player?.id);
                    }
                  }}
                />
                </div>
              </PlayerHandArea>
            </GamePlayArea>
          </StormContainer>
        );

      case 'lane-selection':
        const currentActivePlayer = currentRoom?.players?.find(p => p.isActive);
        const isMyTurn = currentActivePlayer?.id === player?.id;
        
        return (
          <LaneSelectionContainer>
            <StageTitle>Lane Selection</StageTitle>
            <StageDescription>
              Choose your starting lane for the race. Lane 1 (inside) is shortest but most crowded.
              {isMyTurn ? " Your turn to select!" : ` Waiting for ${currentActivePlayer?.name || 'player'} to select...`}
            </StageDescription>
            
            <RaceTrack 
              players={players}
              currentLap={0}
              totalLaps={currentRoom?.settings?.numberOfLaps || 3}
              playerPositions={currentRoom?.gameState?.trackPositions || {}}
              placedCoins={currentRoom?.gameState?.placedCoins || {}}
              activePlayerId={currentActivePlayer?.id}
              stage="lane-selection"
              onLaneSelect={(lane) => {
                if (!isMyTurn) return;
                setSelectedLane(lane);
                selectLane(lane);
              }}
              panZoomEnabled={false}
              focusOnPolePosition={true}
              showPositionNumbers={false}
            />
            
            <LaneGrid>
              {[1, 2, 3, 4].map(lane => {
                const laneOccupied = currentRoom?.players?.some(p => p.lane === lane);
                return (
                  <LaneOption
                    key={lane}
                    selected={selectedLane === lane}
                    onClick={() => {
                      if (!isMyTurn || laneOccupied) return;
                      setSelectedLane(lane);
                      selectLane(lane);
                    }}
                    style={{
                      opacity: laneOccupied ? 0.5 : 1,
                      cursor: (!isMyTurn || laneOccupied) ? 'not-allowed' : 'pointer'
                    }}
                  >
                    <LaneNumber>{lane}</LaneNumber>
                    <LaneDescription>
                      {lane === 1 && "Inside lane - Shortest distance"}
                      {lane === 2 && "Second lane - Good balance"}
                      {lane === 3 && "Third lane - Less congestion"}
                      {lane === 4 && "Outside lane - Most room"}
                      {laneOccupied && <div style={{ color: '#ff4444', fontWeight: 'bold', marginTop: '0.5rem' }}>TAKEN</div>}
                    </LaneDescription>
                  </LaneOption>
                );
              })}
            </LaneGrid>
            
            {!isMyTurn && (
              <div style={{ textAlign: 'center', color: '#00d4ff', fontSize: '1.1rem', marginTop: '2rem' }}>
                🕒 Waiting for {currentActivePlayer?.name || 'player'} to select their lane...
              </div>
            )}
          </LaneSelectionContainer>
        );

      case 'coin':
        return (
          <CoinStageContainer>
            <StageTitle>🪙 Coin Placement Stage</StageTitle>
            <StageDescription>
              Place your coins strategically on the race track. Coins affect movement during racing.
            </StageDescription>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
              <CoinPlacementArea>
                <h3 style={{ color: '#ffd700', marginBottom: '1rem' }}>Race Track</h3>
                <RaceTrack
                  players={currentRoom?.players || []}
                  currentLap={0}
                  totalLaps={currentRoom?.settings?.numberOfLaps || 3}
                  playerPositions={currentRoom?.gameState?.trackPositions || {}}
                  placedCoins={currentRoom?.gameState?.placedCoins || {}}
                  activePlayerId={player?.id}
                  stage="coin"
                  onCoinPlace={(position, lane) => {
                    if (selectedCoin) {
                      placeCoin(selectedCoin.id, `${position}-${lane}`);
                      setSelectedCoin(null);
                    }
                  }}
                  panZoomEnabled={true}
                  focusOnPolePosition={false}
                  showPositionNumbers={true}
                />
              </CoinPlacementArea>
              
              <SidebarSection>
                <SectionTitle>Your Coins ({playerCoins.length})</SectionTitle>
                {playerCoins.length > 0 ? (
                  <CoinCollection
                    coins={playerCoins}
                    size="large"
                    interactive={true}
                    groupByType={true}
                    onCoinSelect={(coin) => {
                      setSelectedCoin(coin);
                    }}
                  />
                ) : (
                  <div style={{ color: '#888', fontStyle: 'italic', padding: '2rem', textAlign: 'center' }}>
                    No coins available<br />
                    <small>Coins are distributed based on Storm stage finishing order</small>
                  </div>
                )}
                
                {selectedCoin && (
                  <div style={{ 
                    marginTop: '1rem', 
                    padding: '1rem', 
                    background: 'rgba(255, 215, 0, 0.1)', 
                    border: '2px solid #ffd700', 
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <strong>Selected Coin: {selectedCoin.value}</strong><br />
                    <small>Click on the track to place it</small>
                  </div>
                )}
                
                {isHost && currentRoom?.players?.every(p => (p.drawnCoins || []).length === 0) && (
                  <div style={{ marginTop: '2rem' }}>
                    <ContinueButton onClick={continueToRacing}>
                      Continue to Racing 🏁
                    </ContinueButton>
                  </div>
                )}
                
                <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>
                  <strong>Coin Values:</strong><br />
                  • Positive: Move forward<br />
                  • Negative: Move backward<br />
                  • Tow-to-Pit: Special effect
                </div>
              </SidebarSection>
            </div>
          </CoinStageContainer>
        );

      case 'racing':
        const isPlayerTurn = currentRoom?.gameState?.activePlayerId === player?.id;
        const playerPosition = currentRoom?.gameState?.trackPositions?.[player?.id];
        const playerHasDiceRoll = player?.lastDiceRoll;
        
        return (
          <RacingContainer>
            <StageTitle>Racing Stage</StageTitle>
            <StageDescription>
              {isPlayerTurn ? "It's your turn! Choose your dice type and roll." : `Waiting for ${currentRoom?.players?.find(p => p.id === currentRoom?.gameState?.activePlayerId)?.name || 'player'} to move.`}
            </StageDescription>
            
            <RaceTrack
              players={players}
              currentLap={playerPosition?.lap || 0}
              totalLaps={currentRoom?.settings?.numberOfLaps || 3}
              playerPositions={currentRoom?.gameState?.trackPositions || {}}
              placedCoins={currentRoom?.gameState?.placedCoins || {}}
              activePlayerId={currentRoom?.gameState?.activePlayerId}
              stage="racing"
              panZoomEnabled={true}
              focusOnPolePosition={false}
              showPositionNumbers={false}
            />
            
            {isPlayerTurn && !playerHasDiceRoll && (
              <DiceSelectionContainer>
                <h3>Choose Your Dice Type</h3>
                <DiceTypeButton onClick={() => handleDiceRoll([], 'movement')}>
                  <strong>Movement Dice</strong>
                  <br />
                  <small>{playerPosition?.inPit ? '1 die (pit rule)' : `${currentRoom?.settings?.numberOfDice || 1} die(s)`}</small>
                </DiceTypeButton>
                
                {!playerPosition?.inPit && (
                  <DiceTypeButton onClick={() => handleDiceRoll([], 'lane-change')}>
                    <strong>Lane-Change Die</strong>
                    <br />
                    <small>Change lanes or check engine</small>
                  </DiceTypeButton>
                )}
              </DiceSelectionContainer>
            )}
            
            {isPlayerTurn && playerHasDiceRoll && (
              <MovementContainer>
                <h3>Dice Result: {playerHasDiceRoll.values.join(', ')}</h3>
                <p>Type: {playerHasDiceRoll.type}</p>
                <ActionButton onClick={() => chooseMovement({ action: 'move' })}>
                  Confirm Movement
                </ActionButton>
              </MovementContainer>
            )}
            
            {!isPlayerTurn && (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
                <p>Waiting for other players...</p>
                <small>Current turn: {currentRoom?.players?.find(p => p.id === currentRoom?.gameState?.activePlayerId)?.name || 'Unknown'}</small>
              </div>
            )}
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
        players={playersWithCardCount}
        currentPlayer={currentRoom?.gameState?.currentPlayer}
        gameStage={currentStage}
      />
      
      <StageContainer>
        {renderStage()}
      </StageContainer>

      {/* Storm Results Overlay */}
      {stormResults && (
        <StormResultsOverlay>
          <StormResultsModal>
            <h2>🏆 Storm Stage Complete!</h2>
            <ResultsList>
              {stormResults.map((result, index) => (
                <ResultItem key={result.playerId} $position={result.finishOrder}>
                  <div className="position">#{result.finishOrder}</div>
                  <div className="player-name">{result.playerName}</div>
                  <div className="card-count">
                    {result.cardCount > 0 ? `${result.cardCount} cards left` : 'Finished!'}
                  </div>
                </ResultItem>
              ))}
            </ResultsList>
            
            {isHost && (
              <ContinueButton onClick={continueToNextStage}>
                Continue to {currentRoom?.gameState?.stormRound === 1 ? 'Lane Selection' : 'Coin Stage'}
              </ContinueButton>
            )}
            
            {!isHost && (
              <WaitingMessage>
                Waiting for host to continue...
              </WaitingMessage>
            )}
          </StormResultsModal>
        </StormResultsOverlay>
      )}
    </GameContainer>
  );
}

export default GameBoard;
