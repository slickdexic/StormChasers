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
    // CRITICAL: Always validate hostId parameter
    if (hostId && this.host.id !== hostId) {
      return false; // Only host can update settings
    }

    if (this.gameState.currentStage !== 'lobby') {
      return false; // Can't change settings after game starts
    }

    // Validate settings per GameDevGuide specifications
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
    // Reset all players for new Storm round
    this.players.forEach(player => {
      player.resetForNewStorm();
    });
    
    // Create and shuffle deck
    this.gameState.createDeck(this.settings);
    
    // Deal cards to players (but don't add to player hands yet for animation)
    const hands = this.gameState.dealCardsToPlayers(this.players, this.settings.cardsPerHand);
    
    // Store dealt hands for animation
    this.dealHands = hands;
    
    // Set dealer as active player (or first player after dealer)
    const dealerIndex = this.players.findIndex(p => p.dealerButton);
    const firstPlayerIndex = dealerIndex !== -1 ? (dealerIndex + 1) % this.players.length : 0;
    
    // Check if first card is an Ace (skip first player) - GameDevGuide rule
    const topCard = this.gameState.getTopCard();
    if (topCard && topCard.rank === 'A') {
      console.log(`👑 First card is Ace - skipping first player`);
      this.setActivePlayer((firstPlayerIndex + 1) % this.players.length);
    } else {
      this.setActivePlayer(firstPlayerIndex);
    }
    
    console.log(`🎯 First player set: ${this.getActivePlayer()?.name}, top card: ${topCard ? `${topCard.rank} of ${topCard.suit}` : 'None'}`);
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
    
    // Create dealing order: start with player after dealer, go clockwise (GameDevGuide requirement)
    const dealingOrder = [];
    for (let i = 0; i < this.players.length; i++) {
      const playerIndex = (dealerIndex + 1 + i) % this.players.length;
      dealingOrder.push(this.players[playerIndex]);
    }
    
    let currentCard = 0;
    
    const dealNextCard = () => {
      if (currentCard >= cardsPerHand) {
        // All cards dealt, now flip one card for discard pile
        console.log('✅ All cards dealt, dealing discard card');
        this.dealInitialDiscardCard(io, playerSockets);
        return;
      }
      
      console.log(`🎯 Dealing round ${currentCard + 1}/${cardsPerHand}`);
      
      // Deal one card to each player in order (GameDevGuide: 0.3s per card)
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
        }, index * 300); // GameDevGuide: 0.3s per card = 300ms
      });
      
      currentCard++;
      
      // Schedule next round of dealing (GameDevGuide timing compliance)
      setTimeout(() => dealNextCard(), this.players.length * 300 + 100); // 300ms per player + small buffer
    };
    
    // Start the dealing animation with proper delay
    setTimeout(() => dealNextCard(), 1000); // Initial delay for better UX
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

  // Get next player in turn order (skip finished players)
  getNextPlayer(currentPlayerIndex) {
    const totalPlayers = this.players.length;
    let nextIndex = (currentPlayerIndex + 1) % totalPlayers;
    let attempts = 0;
    
    // Keep looking for a player who hasn't finished Storm yet
    while (attempts < totalPlayers) {
      const nextPlayer = this.players[nextIndex];
      if (nextPlayer.stormFinishOrder === null) {
        return nextIndex;
      }
      nextIndex = (nextIndex + 1) % totalPlayers;
      attempts++;
    }
    
    // If all players finished, return current index
    return currentPlayerIndex;
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
    console.log(`🎯 PlayCard attempt: Player ${playerId}, Card ID ${cardId}, CalledSuit ${calledSuit}`);
    
    const player = this.getPlayer(playerId);
    if (!player) {
      console.log(`❌ Player not found: ${playerId}`);
      return { success: false, message: 'Player not found' };
    }
    
    if (!player.isActive) {
      console.log(`❌ Player not active: ${player.name} (isActive: ${player.isActive})`);
      console.log(`Current player index: ${this.gameState.currentPlayerIndex}, Player index: ${this.players.indexOf(player)}`);
      return { success: false, message: 'Not your turn' };
    }

    console.log(`✅ Player ${player.name} is active, attempting to remove card ID: ${cardId}`);
    console.log(`Player has ${player.cards.length} cards:`);
    player.cards.forEach((c, i) => {
      console.log(`  [${i}] ${c.rank} of ${c.suit} (ID: ${c.id || 'MISSING ID!'})`);
    });
    
    if (!cardId) {
      console.log(`❌ No card ID provided`);
      return { success: false, message: 'Card ID is required' };
    }
    
    const card = player.removeCard(cardId);
    if (!card) {
      console.log(`❌ Card not found in player hand with ID: ${cardId}`);
      return { success: false, message: 'Card not found' };
    }

    console.log(`✅ Found and removed card: ${card.rank} of ${card.suit} (ID: ${card.id})`);
    
    const topCard = this.gameState.getTopCard();
    console.log(`Top card: ${topCard ? `${topCard.rank} of ${topCard.suit}` : 'None'}`);
    console.log(`Toxic seven count: ${this.gameState.toxicSevenCount}`);
    
    if (!this.gameState.canPlayCard(card, topCard)) {
      console.log(`❌ Card cannot be played - returning to hand`);
      // Return card to player's hand
      player.addCards([card]);
      return { success: false, message: 'Invalid card play' };
    }

    console.log(`✅ Card can be played! Playing ${card.rank} of ${card.suit}`);
    
    // Check two-player endgame Queen rule - CRITICAL FIX
    const remainingPlayers = this.players.filter(p => p.stormFinishOrder === null);
    const isFinishingWithQueen = player.cards.length === 0 && card.rank === 'Q'; // Player would have 0 cards after playing this Queen
    const isTwoPlayerEndgame = remainingPlayers.length === 2;
    
    if (isFinishingWithQueen && isTwoPlayerEndgame) {
      console.log(`👸 Two-player endgame: Player finishing with Queen, no suit call needed`);
      calledSuit = null; // Override any called suit - per GameDevGuide rule
    }
    
    // Play the card
    this.gameState.playCard(card, calledSuit);
    
    // Check if player finished
    if (player.hasFinishedStorm()) {
      console.log(`🏆 Player ${player.name} finished Storm!`);
      const finishResult = this.handleStormPlayerFinished(player);
      
      // If Storm is complete, return special result
      if (finishResult && finishResult.stormComplete) {
        console.log(`🎯 Storm stage complete! Returning special result.`);
        return { 
          success: true, 
          card, 
          gameState: this.gameState.toJSON(),
          stormComplete: true,
          showResults: true
        };
      } else if (finishResult && finishResult.playerFinished) {
        console.log(`🏆 Player finished but Storm continues`);
        // Continue with normal turn advancement
      }
    }
    
    // Handle special card effects
    if (card.rank === 'A') {
      console.log(`👑 Ace played - skipping next player`);
      // Skip next player
      this.advanceToNextPlayer(); // Skip one
    }
    
    this.advanceToNextPlayer();
    console.log(`🔄 Advanced to next player`);
    
    // Check if player finished for return value
    const playerFinished = player.hasFinishedStorm();
    
    return { 
      success: true, 
      card, 
      gameState: this.gameState.toJSON(),
      playerFinished: playerFinished
    };
  }

  // Handle Storm stage card draw
  drawCards(playerId, count = null) {
    const player = this.getPlayer(playerId);
    if (!player || !player.isActive) {
      return { success: false, message: 'Not your turn' };
    }

    // Determine how many cards to draw
    let cardsToDraw;
    if (this.gameState.toxicSevenCount > 0) {
      // Toxic seven is active - must draw (toxicSevenCount * 2) cards
      cardsToDraw = this.gameState.toxicSevenCount * 2;
      console.log(`☠️ Toxic seven active! Drawing ${cardsToDraw} cards (${this.gameState.toxicSevenCount} toxic sevens)`);
    } else {
      // Normal draw - use provided count or default to 1
      cardsToDraw = count || 1;
      console.log(`📋 Normal draw: ${cardsToDraw} cards`);
    }

    const drawnCards = this.gameState.drawCards(cardsToDraw);
    
    if (drawnCards.length === 0) {
      return { success: false, message: 'No cards left in deck' };
    }
    
    player.addCards(drawnCards);
    console.log(`✅ Player ${player.name} drew ${drawnCards.length} cards`);
    
    // Reset toxic seven count after drawing
    if (this.gameState.toxicSevenCount > 0) {
      console.log(`🔄 Resetting toxic seven count from ${this.gameState.toxicSevenCount} to 0`);
      this.gameState.toxicSevenCount = 0;
    }
    
    // Advance to next player
    this.advanceToNextPlayer();
    
    return { 
      success: true, 
      drawnCards, 
      cardCount: drawnCards.length,
      gameState: this.gameState.toJSON() 
    };
  }

  // Handle player finishing Storm stage
  handleStormPlayerFinished(player) {
    // Don't reassign if player already finished
    if (player.stormFinishOrder !== null) {
      console.log(`⚠️ Player ${player.name} already has finish order ${player.stormFinishOrder}`);
      return;
    }
    
    const finishedCount = this.players.filter(p => p.stormFinishOrder !== null).length;
    const newFinishOrder = finishedCount + 1;
    player.setStormFinishOrder(newFinishOrder);
    
    console.log(`🏆 Player ${player.name} finished in position ${newFinishOrder}`);
    
    // Check if Storm stage should end (only one or no players left with cards)
    const playersWithCards = this.players.filter(p => p.stormFinishOrder === null);
    
    if (playersWithCards.length <= 1) {
      console.log(`🎯 Storm stage ending - ${playersWithCards.length} players remaining with cards`);
      
      // If exactly one player remains, give them the last position
      if (playersWithCards.length === 1) {
        const lastPlayer = playersWithCards[0];
        const lastFinishOrder = finishedCount + 2; // +1 for current player, +1 for last player
        lastPlayer.setStormFinishOrder(lastFinishOrder);
        console.log(`🏆 ${lastPlayer.name} assigned final position ${lastFinishOrder}`);
      }
      
      console.log(`🎯 All players have finish orders! Storm stage complete.`);
      
      // Advance dealer button
      const currentDealerIndex = this.players.findIndex(p => p.dealerButton);
      if (currentDealerIndex !== -1) {
        this.players[currentDealerIndex].setDealerButton(false);
        const nextDealerIndex = (currentDealerIndex + 1) % this.players.length;
        this.players[nextDealerIndex].setDealerButton(true);
        this.gameState.dealerIndex = nextDealerIndex;
        console.log(`🎯 Dealer button advanced to ${this.players[nextDealerIndex].name}`);
      }
      
      // Signal that Storm stage is complete and show results
      this.gameState.stormComplete = true;
      
      return { stormComplete: true, showResults: true };
    } else {
      console.log(`🎮 Storm continues - ${playersWithCards.length} players still have cards`);
      // Return info that player finished but game continues
      return { playerFinished: true, continueGame: true };
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
