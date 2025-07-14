const Player = require('./Player');
const GameState = require('./GameState');

class GameRoom {
  constructor(id, name, host, settings = {}) {
    this.id = id;
    this.name = name;
    this.host = host;
    this.players = [host];
    this.gameState = new GameState();
    this.createdAt = new Date();
    
    // Set host properties
    host.isHost = true;
    host.roomId = id;
    
    // Default settings based on GameDevGuide
    this.settings = {
      numberOfLaps: settings.numberOfLaps || 3,
      numberOfDice: settings.numberOfDice || 1, // 1 or 2
      numberOfDecks: settings.numberOfDecks || 1, // 1 or 2  
      cardsPerHand: settings.cardsPerHand || 4, // 3-5
      numberOfCoins: settings.numberOfCoins || 2, // 1-3
      ...settings
    };

    // Assign random color to host if not set
    if (!host.color) {
      host.assignRandomColor(this);
    }
  }

  // Add a player to the room
  addPlayer(player) {
    if (this.players.length >= 4) {
      return false; // Room full
    }

    if (this.gameState.currentStage !== 'lobby') {
      return false; // Game already started
    }

    // Check if player is already in room
    if (this.players.find(p => p.id === player.id)) {
      return false;
    }

    // Assign random available color
    if (!player.color) {
      player.assignRandomColor(this);
    }

    this.players.push(player);
    player.roomId = this.id;
    
    return true;
  }

  // Remove a player from the room
  removePlayer(playerId) {
    const playerIndex = this.players.findIndex(p => p.id === playerId);
    
    if (playerIndex === -1) {
      return false;
    }

    const removedPlayer = this.players[playerIndex];
    this.players.splice(playerIndex, 1);
    
    // If the host left, promote the first remaining player to host
    if (removedPlayer.isHost && this.players.length > 0) {
      this.players[0].isHost = true;
      this.host = this.players[0];
    }

    removedPlayer.roomId = null;
    removedPlayer.isHost = false;
    
    return true;
  }

  // Get a player by ID
  getPlayer(playerId) {
    return this.players.find(p => p.id === playerId);
  }

  // Update room settings (only host can do this)
  updateSettings(newSettings, hostId) {
    if (this.host.id !== hostId) {
      return false; // Only host can update settings
    }

    if (this.gameState.currentStage !== 'lobby') {
      return false; // Can't change settings after game starts
    }

    // Validate settings
    const validSettings = {};
    
    if (newSettings.numberOfLaps >= 1 && newSettings.numberOfLaps <= 5) {
      validSettings.numberOfLaps = newSettings.numberOfLaps;
    }
    
    if ([1, 2].includes(newSettings.numberOfDice)) {
      validSettings.numberOfDice = newSettings.numberOfDice;
    }
    
    if ([1, 2].includes(newSettings.numberOfDecks)) {
      validSettings.numberOfDecks = newSettings.numberOfDecks;
    }
    
    if (newSettings.cardsPerHand >= 3 && newSettings.cardsPerHand <= 5) {
      validSettings.cardsPerHand = newSettings.cardsPerHand;
    }
    
    if (newSettings.numberOfCoins >= 1 && newSettings.numberOfCoins <= 3) {
      validSettings.numberOfCoins = newSettings.numberOfCoins;
    }

    Object.assign(this.settings, validSettings);
    return true;
  }

  // Start the game
  startGame() {
    if (this.players.length < 2) {
      return false; // Need at least 2 players
    }

    if (this.gameState.currentStage !== 'lobby') {
      return false; // Game already started
    }

    // Reset all players' game state
    this.players.forEach(player => {
      player.resetGameState();
    });

    // Initialize game state
    this.gameState.initializeGame(this.settings);
    
    // Initialize track positions for all players
    this.gameState.initializeTrackPositions(this.players.map(p => p.id));
    
    // Set first player as active for dealer selection
    this.players[0].isActive = true;
    this.gameState.currentPlayerIndex = 0;
    
    return true;
  }

  // Advance to next stage
  advanceToNextStage() {
    this.gameState.nextStage();
    
    // Handle stage-specific setup
    if (this.gameState.currentStage === 'storm') {
      this.setupStormStage();
    } else if (this.gameState.currentStage === 'lane-selection') {
      this.setupLaneSelectionStage();
    } else if (this.gameState.currentStage === 'coin') {
      this.setupCoinStage();
    } else if (this.gameState.currentStage === 'racing') {
      this.setupRacingStage();
    }
  }

  // Setup Storm stage
  setupStormStage() {
    // Create and shuffle deck
    this.gameState.createDeck(this.settings);
    
    // Deal cards to players (but don't add to player hands yet for animation)
    const hands = this.gameState.dealCardsToPlayers(this.players, this.settings.cardsPerHand);
    
    // Store dealt hands for animation
    this.dealHands = hands;
    
    // Set dealer as active player (or first player after dealer)
    const dealerIndex = this.players.findIndex(p => p.dealerButton);
    const firstPlayerIndex = dealerIndex !== -1 ? (dealerIndex + 1) % this.players.length : 0;
    
    // Check if first card is an Ace (skip first player)
    const topCard = this.gameState.getTopCard();
    if (topCard && topCard.rank === 'A') {
      this.setActivePlayer((firstPlayerIndex + 1) % this.players.length);
    } else {
      this.setActivePlayer(firstPlayerIndex);
    }
  }

  // Start animated card dealing
  startAnimatedCardDealing(io, playerSockets) {
    console.log('🎯 Starting animated card dealing...');
    if (!this.dealHands) {
      console.log('❌ No dealHands available');
      return;
    }
    
    const cardsPerHand = this.settings.cardsPerHand;
    const dealerIndex = this.players.findIndex(p => p.dealerButton);
    
    console.log(`💳 Dealing ${cardsPerHand} cards per hand to ${this.players.length} players`);
    
    // Create dealing order: start with player after dealer, go clockwise
    const dealingOrder = [];
    for (let i = 0; i < this.players.length; i++) {
      const playerIndex = (dealerIndex + 1 + i) % this.players.length;
      dealingOrder.push(this.players[playerIndex]);
    }
    
    let currentCard = 0;
    
    const dealNextCard = () => {
      console.log(`🎯 Dealing round ${currentCard + 1}/${cardsPerHand}`);
      if (currentCard >= cardsPerHand) {
        // All cards dealt, now flip one card for discard pile
        console.log('✅ All cards dealt, dealing discard card');
        this.dealInitialDiscardCard(io, playerSockets);
        return;
      }
      
      // Deal one card to each player in order
      dealingOrder.forEach((player, index) => {
        setTimeout(() => {
          const playerCards = this.dealHands.get(player.id) || [];
          if (currentCard < playerCards.length) {
            const card = playerCards[currentCard];
            
            console.log(`🎯 Dealing card ${currentCard + 1} to ${player.name}: ${card.rank} of ${card.suit}`);
            
            // Send card-dealt animation event to all players in the room
            io.to(this.id).emit('card-dealt', {
              playerId: player.id,
              playerName: player.name,
              cardIndex: currentCard,
              totalCards: cardsPerHand,
              card: { rank: 'back', suit: 'back' }, // Face down during dealing
              dealingToPlayer: index + 1,
              totalPlayers: this.players.length
            });
          }
        }, index * 400); // Increased delay from 200ms to 400ms for better visibility
      });
      
      currentCard++;
      
      // Schedule next round of dealing
      setTimeout(() => dealNextCard(), this.players.length * 400 + 800); // Increased delays
    };
    
    // Start the dealing animation
    setTimeout(() => dealNextCard(), 1000); // Increased initial delay
  }

  // Deal initial discard card
  dealInitialDiscardCard(io, playerSockets) {
    console.log('🎯 Dealing initial discard card');
    // Turn over one card to start the discard pile
    const discardCard = this.gameState.deck.pop();
    this.gameState.discardPile.push(discardCard);
    
    console.log(`🔄 Discard card: ${discardCard.rank} of ${discardCard.suit}`);
    
    // Send discard card dealt event
    io.to(this.id).emit('discard-card-dealt', {
      card: discardCard
    });
    
    // Wait a moment then finalize dealing
    setTimeout(() => {
      console.log('✅ Finalizing dealing and starting storm');
      this.finalizeDealingAndStartStorm(io, playerSockets);
    }, 1500); // Increased delay to let players see the discard card
  }

  // Finalize dealing and start storm
  finalizeDealingAndStartStorm(io, playerSockets) {
    console.log('🎯 Finalizing dealing and starting storm stage');
    
    // Now actually assign cards to players
    for (const player of this.players) {
      const playerCards = this.dealHands.get(player.id) || [];
      player.addCards(playerCards);
      console.log(`✅ Added ${playerCards.length} cards to ${player.name}`);
    }
    
    // Clear the temporary dealing hands
    this.dealHands = null;
    
    console.log('🎯 Sending storm-started events to all players');
    
    // Send detailed room data to each player individually (includes their hand)
    this.players.forEach(roomPlayer => {
      const playerSocket = [...playerSockets.entries()].find(([socketId, data]) => data.id === roomPlayer.id);
      if (playerSocket) {
        io.to(playerSocket[0]).emit('storm-started', {
          room: this.toDetailedJSON(roomPlayer.id)
        });
      }
    });
    
    console.log('✅ Storm stage fully initialized');
  }

  // Setup Lane Selection stage
  setupLaneSelectionStage() {
    // Set active player based on Storm finishing order
    const stormWinner = this.players.find(p => p.stormFinishOrder === 1);
    if (stormWinner) {
      const winnerIndex = this.players.findIndex(p => p.id === stormWinner.id);
      this.setActivePlayer(winnerIndex);
    }
  }

  // Setup Coin stage
  setupCoinStage() {
    // Distribute coins based on Storm finishing order
    for (const player of this.players) {
      const coinCount = this.calculateCoinCount(player.stormFinishOrder);
      if (coinCount > 0) {
        const coins = this.gameState.drawCoins(coinCount);
        player.drawCoins(coins);
      }
    }
    
    // Set active player based on Storm finishing order
    const stormWinner = this.players.find(p => p.stormFinishOrder === 1);
    if (stormWinner) {
      const winnerIndex = this.players.findIndex(p => p.id === stormWinner.id);
      this.setActivePlayer(winnerIndex);
    }
  }

  // Calculate coin count based on finish order
  calculateCoinCount(finishOrder) {
    const baseCoins = this.settings.numberOfCoins;
    switch (finishOrder) {
      case 1: return baseCoins;
      case 2: return Math.max(0, baseCoins - 1);
      case 3: return Math.max(0, baseCoins - 2);
      case 4: return 0;
      default: return 0;
    }
  }

  // Setup Racing stage
  setupRacingStage() {
    // Set active player based on Storm finishing order
    const stormWinner = this.players.find(p => p.stormFinishOrder === 1);
    if (stormWinner) {
      const winnerIndex = this.players.findIndex(p => p.id === stormWinner.id);
      this.setActivePlayer(winnerIndex);
    }
  }

  // Get next player in turn order
  getNextPlayer(currentPlayerIndex) {
    return (currentPlayerIndex + 1) % this.players.length;
  }

  // Set the active player
  setActivePlayer(playerIndex) {
    this.players.forEach((player, index) => {
      player.isActive = index === playerIndex;
    });
    this.gameState.currentPlayerIndex = playerIndex;
  }

  // Get active player
  getActivePlayer() {
    return this.players[this.gameState.currentPlayerIndex];
  }

  // Advance to next player
  advanceToNextPlayer() {
    const nextIndex = this.getNextPlayer(this.gameState.currentPlayerIndex);
    this.setActivePlayer(nextIndex);
    return nextIndex;
  }

  // Handle dealer selection
  selectDealerCard(playerId, cardIndex) {
    const player = this.getPlayer(playerId);
    if (!player || !player.isActive) {
      return { success: false, message: 'Not your turn' };
    }

    const card = this.gameState.selectDealerCard(cardIndex, playerId);
    if (!card) {
      return { success: false, message: 'Invalid card selection' };
    }

    player.selectedDealerCard = card;
    
    // Advance to next player
    this.advanceToNextPlayer();
    
    // Check if all players have selected
    const allSelected = this.players.every(p => p.selectedDealerCard !== null);
    if (allSelected) {
      return this.resolveDealerSelection();
    }
    
    return { success: true, card };
  }

  // Resolve dealer selection
  resolveDealerSelection() {
    const playerIds = this.players.map(p => p.id);
    const result = this.gameState.determineDealer(playerIds);
    
    if (result.dealerPlayerId) {
      // Clear dealer selection, set dealer button
      const dealer = this.getPlayer(result.dealerPlayerId);
      dealer.setDealerButton(true);
      const dealerIndex = this.players.findIndex(p => p.id === result.dealerPlayerId);
      this.gameState.dealerIndex = dealerIndex;
      
      // Set player after dealer as current player for the first storm (clockwise)
      const nextPlayerIndex = (dealerIndex + 1) % this.players.length;
      this.gameState.currentPlayerIndex = nextPlayerIndex;
      
      // DON'T advance to Storm stage yet - wait for host to continue
      // this.advanceToNextStage(); -- REMOVED
      
      return { 
        success: true, 
        dealer: dealer.toJSON(),
        showResults: true  // Flag to show results screen
      };
    } else {
      // Handle tie - reset tied players and continue
      this.gameState.resetDealerSelection(result.tiedPlayers);
      
      // Reset tied players' selected cards
      for (const playerId of result.tiedPlayers) {
        const player = this.getPlayer(playerId);
        if (player) {
          player.selectedDealerCard = null;
        }
      }
      
      // Set first tied player as active
      const firstTiedPlayer = this.getPlayer(result.tiedPlayers[0]);
      if (firstTiedPlayer) {
        const playerIndex = this.players.findIndex(p => p.id === firstTiedPlayer.id);
        this.setActivePlayer(playerIndex);
      }
      
      return { 
        success: true, 
        tie: true,
        tiedPlayers: result.tiedPlayers,
        message: 'Tie detected. Tied players must select again.'
      };
    }
  }

  // Handle Storm stage card play
  playCard(playerId, cardId, calledSuit = null) {
    const player = this.getPlayer(playerId);
    if (!player || !player.isActive) {
      return { success: false, message: 'Not your turn' };
    }

    const card = player.removeCard(cardId);
    if (!card) {
      return { success: false, message: 'Card not found' };
    }

    const topCard = this.gameState.getTopCard();
    if (!this.gameState.canPlayCard(card, topCard)) {
      // Return card to player's hand
      player.addCards([card]);
      return { success: false, message: 'Invalid card play' };
    }

    // Play the card
    this.gameState.playCard(card, calledSuit);
    
    // Check if player finished
    if (player.hasFinishedStorm()) {
      this.handleStormPlayerFinished(player);
    }
    
    // Handle special card effects
    if (card.rank === 'A') {
      // Skip next player
      this.advanceToNextPlayer(); // Skip one
    }
    
    this.advanceToNextPlayer();
    
    return { success: true, card, gameState: this.gameState.toJSON() };
  }

  // Handle player finishing Storm stage
  handleStormPlayerFinished(player) {
    const finishedCount = this.players.filter(p => p.stormFinishOrder !== null).length;
    player.setStormFinishOrder(finishedCount + 1);
    
    // Check if all players finished
    const allFinished = this.players.every(p => p.stormFinishOrder !== null);
    if (allFinished) {
      // Advance dealer button
      const currentDealerIndex = this.players.findIndex(p => p.dealerButton);
      if (currentDealerIndex !== -1) {
        this.players[currentDealerIndex].setDealerButton(false);
        const nextDealerIndex = (currentDealerIndex + 1) % this.players.length;
        this.players[nextDealerIndex].setDealerButton(true);
        this.gameState.dealerIndex = nextDealerIndex;
      }
      
      // Advance to next stage
      if (this.gameState.stormRound === 1) {
        // First storm, go to lane selection
        this.advanceToNextStage(); // lane-selection
      } else {
        // Subsequent storms, go to coin stage
        this.gameState.currentStage = 'coin';
        this.setupCoinStage();
      }
    }
  }

  // Check if all players are ready
  allPlayersReady() {
    return this.players.every(player => player.isReady);
  }

  // Get room status for lobby display
  getStatus() {
    if (this.gameState.currentStage === 'lobby') {
      return 'Waiting to start';
    } else {
      return `In game - ${this.gameState.currentStage}`;
    }
  }

  // JSON representation for clients
  toJSON() {
    const gameState = this.gameState.toJSON();
    
    // Add current player ID to game state
    if (gameState.currentPlayerIndex >= 0 && gameState.currentPlayerIndex < this.players.length) {
      gameState.currentPlayer = this.players[gameState.currentPlayerIndex].id;
    }
    
    return {
      id: this.id,
      name: this.name,
      host: this.host.toJSON(),
      players: this.players.map(p => p.toJSON()),
      gameState: gameState,
      settings: this.settings,
      status: this.getStatus(),
      createdAt: this.createdAt.toISOString()
    };
  }

  // Get detailed JSON for players in the room (includes game state)
  toDetailedJSON(requestingPlayerId) {
    const baseData = this.toJSON();
    
    // Add detailed player data for the requesting player
    const requestingPlayer = this.getPlayer(requestingPlayerId);
    if (requestingPlayer) {
      baseData.myPlayerData = requestingPlayer.toDetailedJSON();
    }

    return baseData;
  }
}

module.exports = GameRoom;
