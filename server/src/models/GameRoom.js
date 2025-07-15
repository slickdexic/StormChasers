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

  // Deal cards instantly and start storm
  dealCardsAndStartStorm(io, playerSockets) {
    console.log('🎯 Dealing cards instantly and starting storm...');
    console.log('🔍 Debug: this.dealHands exists:', !!this.dealHands);
    console.log('🔍 Debug: dealHands size:', this.dealHands ? this.dealHands.size : 'N/A');
    
    if (!this.dealHands) {
      console.log('❌ No dealHands available');
      return;
    }
    
    console.log(`💳 Dealing ${this.settings.cardsPerHand} cards per hand to ${this.players.length} players`);
    
    // Deal initial discard card
    const discardCard = this.gameState.deck.pop();
    this.gameState.discardPile.push(discardCard);
    console.log(`🔄 Discard card: ${discardCard.rank} of ${discardCard.suit}`);
    
    // Assign cards to players instantly
    for (const player of this.players) {
      const playerCards = this.dealHands.get(player.id) || [];
      player.addCards(playerCards);
      console.log(`✅ Added ${playerCards.length} cards to ${player.name}`);
    }
    
    // Clear the temporary dealing hands
    this.dealHands = null;
    
    // Start storm stage immediately
    this.startStormStage(io, playerSockets);
  }

  // Start storm stage
  startStormStage(io, playerSockets) {
    console.log('🎯 Starting storm stage');
    
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
    
    console.log('✅ Storm stage started successfully');
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
    // Initialize track positions if first time
    if (this.gameState.trackPositions.size === 0) {
      this.gameState.initializeTrackPositions(this.players.map(p => p.id));
    }
    
    // Set active player based on Storm finishing order
    const stormWinner = this.players.find(p => p.stormFinishOrder === 1);
    if (stormWinner) {
      const winnerIndex = this.players.findIndex(p => p.id === stormWinner.id);
      this.setActivePlayer(winnerIndex);
    }
  }

  // Roll dice for racing
  rollDice(playerId, diceType = 'movement') {
    console.log(`🎲 Rolling ${diceType} dice for player ${playerId}`);
    
    try {
      const player = this.players.find(p => p.id === playerId);
      if (!player) {
        return { success: false, error: 'Player not found' };
      }
      
      const position = this.gameState.trackPositions.get(playerId);
      if (!position) {
        return { success: false, error: 'Player position not found' };
      }
      
      let values = [];
      
      if (diceType === 'movement') {
        // Use game settings for number of dice, except in pit
        const numberOfDice = position.inPit ? 1 : this.settings.numberOfDice;
        
        for (let i = 0; i < numberOfDice; i++) {
          values.push(Math.floor(Math.random() * 6) + 1);
        }
        
        console.log(`🎲 Movement dice rolled: ${values.join(', ')}`);
        
      } else if (diceType === 'lane-change') {
        // Lane-change die: 1=L1, 2=R1, 3=Check Engine, 4=L2, 5=R2, 6=Check Engine
        const roll = Math.floor(Math.random() * 6) + 1;
        values = [roll];
        
        console.log(`🎲 Lane-change die rolled: ${roll}`);
      }
      
      // Store dice roll result for player
      player.lastDiceRoll = { type: diceType, values: values };
      
      return { success: true, values: values };
      
    } catch (error) {
      console.error('Error rolling dice:', error);
      return { success: false, error: 'Failed to roll dice' };
    }
  }

  // Process movement after dice roll
  processMovement(playerId, movementData) {
    console.log(`🚗 Processing movement for player ${playerId}:`, movementData);
    
    try {
      const player = this.players.find(p => p.id === playerId);
      if (!player) {
        return { success: false, error: 'Player not found' };
      }
      
      if (!player.lastDiceRoll) {
        return { success: false, error: 'No dice roll found' };
      }
      
      const currentPosition = this.gameState.trackPositions.get(playerId);
      if (!currentPosition) {
        return { success: false, error: 'Player position not found' };
      }
      
      const oldPosition = { ...currentPosition };
      let newPosition = { ...currentPosition };
      let coinsTriggered = [];
      
      // Process movement based on dice type
      if (player.lastDiceRoll.type === 'movement') {
        const totalMove = player.lastDiceRoll.values.reduce((sum, val) => sum + val, 0);
        const result = this.movePlayerForward(playerId, totalMove);
        newPosition = result.newPosition;
        coinsTriggered = result.coinsTriggered;
        
      } else if (player.lastDiceRoll.type === 'lane-change') {
        const roll = player.lastDiceRoll.values[0];
        const result = this.changeLane(playerId, roll);
        newPosition = result.newPosition;
        coinsTriggered = result.coinsTriggered;
      }
      
      // Update player position
      this.gameState.updatePlayerPosition(playerId, newPosition.position, newPosition.lane, newPosition.lap);
      
      // Check if player finished race
      const raceComplete = this.checkRaceComplete(playerId);
      let finishOrder = null;
      
      if (raceComplete) {
        finishOrder = this.gameState.finishedPlayers.length + 1;
        this.gameState.finishedPlayers.push({ playerId: playerId, finishOrder: finishOrder });
      }
      
      // Advance to next player
      const currentPlayerIndex = this.players.findIndex(p => p.id === playerId);
      const nextPlayerIndex = this.getNextRacingPlayer(currentPlayerIndex);
      this.setActivePlayer(nextPlayerIndex);
      
      // Check if round is complete
      const roundComplete = this.checkRoundComplete();
      let results = null;
      
      if (roundComplete) {
        results = this.getRacingResults();
      }
      
      // Clear dice roll
      player.lastDiceRoll = null;
      
      return {
        success: true,
        oldPosition: oldPosition,
        newPosition: newPosition,
        coinsTriggered: coinsTriggered,
        raceComplete: raceComplete,
        finishOrder: finishOrder,
        roundComplete: roundComplete,
        results: results
      };
      
    } catch (error) {
      console.error('Error processing movement:', error);
      return { success: false, error: 'Failed to process movement' };
    }
  }

  // Move player forward by specified amount
  movePlayerForward(playerId, moveAmount) {
    const position = this.gameState.trackPositions.get(playerId);
    let newPosition = { ...position };
    let coinsTriggered = [];
    
    console.log(`🚗 Moving player ${playerId} forward ${moveAmount} spaces from position ${position.position}`);
    
    // Handle movement from pit
    if (position.inPit) {
      // From pit, move to pit-lane
      if (moveAmount <= 5) {
        newPosition.inPit = false;
        newPosition.inPitLane = true;
        newPosition.position = moveAmount; // Pit-lane position 1-5
      } else {
        // Hit pit-lane wall, stay in pit
        console.log(`🚗 Player hit pit-lane wall, staying in pit`);
      }
      return { newPosition, coinsTriggered };
    }
    
    // Handle movement from pit-lane
    if (position.inPitLane) {
      const newPitLanePos = position.position + moveAmount;
      if (newPitLanePos > 5) {
        // Hit pit-lane wall, go back to pit
        newPosition.inPitLane = false;
        newPosition.inPit = true;
        newPosition.position = 0;
        console.log(`🚗 Player hit pit-lane wall, sent back to pit`);
      } else {
        newPosition.position = newPitLanePos;
      }
      return { newPosition, coinsTriggered };
    }
    
    // Normal track movement
    let remainingMove = moveAmount;
    
    while (remainingMove > 0) {
      const nextPos = (newPosition.position % 96) + 1;
      
      // Check for obstruction (other players)
      const obstructed = this.isPositionObstructed(nextPos, newPosition.lane, playerId);
      
      if (obstructed) {
        console.log(`🚗 Position ${nextPos} lane ${newPosition.lane} is obstructed, stopping movement`);
        break;
      }
      
      // Move to next position
      newPosition.position = nextPos;
      remainingMove--;
      
      // Check for lap completion (crossing start/finish line)
      if (newPosition.position === 1 && position.position === 96) {
        newPosition.lap++;
        console.log(`🏁 Player ${playerId} completed lap ${newPosition.lap}`);
      }
      
      // Check for coins on this position
      const coinKey = `${newPosition.position}-${newPosition.lane}`;
      const coin = this.gameState.placedCoins.get(coinKey);
      
      if (coin) {
        console.log(`🪙 Player triggered coin: ${coin.value}`);
        coinsTriggered.push(coin);
        
        // Remove coin from track
        this.gameState.placedCoins.delete(coinKey);
        
        // Apply coin effect
        const coinEffect = this.applyCoinEffect(playerId, coin, newPosition);
        newPosition = coinEffect.newPosition;
        coinsTriggered = coinsTriggered.concat(coinEffect.additionalCoins || []);
      }
    }
    
    return { newPosition, coinsTriggered };
  }

  // Change lane based on lane-change die
  changeLane(playerId, dieValue) {
    const position = this.gameState.trackPositions.get(playerId);
    let newPosition = { ...position };
    let coinsTriggered = [];
    
    console.log(`🚗 Player ${playerId} changing lanes with die value ${dieValue}`);
    
    // Lane-change die faces: 1=L1, 2=R1, 3=Check Engine, 4=L2, 5=R2, 6=Check Engine
    switch (dieValue) {
      case 1: // L1 - Move one lane left (towards inside)
        if (newPosition.lane > 1) {
          const targetLane = newPosition.lane - 1;
          if (!this.isPositionObstructed(newPosition.position, targetLane, playerId)) {
            newPosition.lane = targetLane;
          }
        }
        break;
        
      case 2: // R1 - Move one lane right (towards outside)
        if (newPosition.lane < 4) {
          const targetLane = newPosition.lane + 1;
          if (!this.isPositionObstructed(newPosition.position, targetLane, playerId)) {
            newPosition.lane = targetLane;
          }
        }
        break;
        
      case 3: // Check Engine - Turn ends
      case 6: // Check Engine - Turn ends
        console.log(`🚗 Check Engine! Turn ends for player ${playerId}`);
        break;
        
      case 4: // L2 - Move up to two lanes left
        for (let i = 1; i <= 2 && newPosition.lane > 1; i++) {
          const targetLane = newPosition.lane - 1;
          if (!this.isPositionObstructed(newPosition.position, targetLane, playerId)) {
            newPosition.lane = targetLane;
          } else {
            break;
          }
        }
        break;
        
      case 5: // R2 - Move up to two lanes right
        for (let i = 1; i <= 2 && newPosition.lane < 4; i++) {
          const targetLane = newPosition.lane + 1;
          if (!this.isPositionObstructed(newPosition.position, targetLane, playerId)) {
            newPosition.lane = targetLane;
          } else {
            break;
          }
        }
        break;
    }
    
    // Check for coins on new position
    const coinKey = `${newPosition.position}-${newPosition.lane}`;
    const coin = this.gameState.placedCoins.get(coinKey);
    
    if (coin) {
      console.log(`🪙 Player triggered coin during lane change: ${coin.value}`);
      coinsTriggered.push(coin);
      
      // Remove coin from track
      this.gameState.placedCoins.delete(coinKey);
      
      // Apply coin effect
      const coinEffect = this.applyCoinEffect(playerId, coin, newPosition);
      newPosition = coinEffect.newPosition;
      coinsTriggered = coinsTriggered.concat(coinEffect.additionalCoins || []);
    }
    
    return { newPosition, coinsTriggered };
  }

  // Check if position is obstructed by another player
  isPositionObstructed(position, lane, excludePlayerId) {
    for (const [playerId, playerPos] of this.gameState.trackPositions.entries()) {
      if (playerId !== excludePlayerId && 
          playerPos.position === position && 
          playerPos.lane === lane &&
          !playerPos.inPit &&
          !playerPos.inPitLane) {
        return true;
      }
    }
    return false;
  }

  // Apply coin effect to player
  applyCoinEffect(playerId, coin, currentPosition) {
    let newPosition = { ...currentPosition };
    let additionalCoins = [];
    
    console.log(`🪙 Applying coin effect ${coin.value} to player ${playerId}`);
    
    if (coin.value === 'tow-to-pit') {
      // Send to pit
      newPosition.inPit = true;
      newPosition.inPitLane = false;
      newPosition.position = 0;
      console.log(`🚗 Player ${playerId} towed to pit`);
      
    } else {
      // Movement coins (+2, +3, +4, +5, -2, -3, -4, -5)
      const moveAmount = parseInt(coin.value);
      
      if (moveAmount > 0) {
        // Forward movement
        const result = this.movePlayerForward(playerId, moveAmount);
        newPosition = result.newPosition;
        additionalCoins = result.coinsTriggered;
        
      } else {
        // Backward movement
        const backwardAmount = Math.abs(moveAmount);
        newPosition.position = Math.max(1, newPosition.position - backwardAmount);
        
        // Handle lap regression if needed
        if (newPosition.position === 1 && currentPosition.position > 90) {
          newPosition.lap = Math.max(0, newPosition.lap - 1);
        }
      }
    }
    
    return { newPosition, additionalCoins };
  }

  // Get next player for racing (skip finished players)
  getNextRacingPlayer(currentPlayerIndex) {
    const totalPlayers = this.players.length;
    let nextIndex = (currentPlayerIndex + 1) % totalPlayers;
    let attempts = 0;
    
    // Skip players who have finished the race
    while (attempts < totalPlayers) {
      const nextPlayer = this.players[nextIndex];
      const isFinished = this.gameState.finishedPlayers.some(fp => fp.playerId === nextPlayer.id);
      
      if (!isFinished) {
        return nextIndex;
      }
      nextIndex = (nextIndex + 1) % totalPlayers;
      attempts++;
    }
    
    // If all players finished, return current index
    return currentPlayerIndex;
  }

  // Check if player completed the race
  checkRaceComplete(playerId) {
    const position = this.gameState.trackPositions.get(playerId);
    if (!position) return false;
    
    // Player finishes if they complete all laps and cross finish line
    return position.lap >= this.settings.numberOfLaps && position.position === 1;
  }

  // Check if racing round is complete
  checkRoundComplete() {
    // Round is complete when all players finish or only one player remains
    const activePlayers = this.players.filter(p => 
      !this.gameState.finishedPlayers.some(fp => fp.playerId === p.id)
    );
    
    return activePlayers.length <= 1;
  }

  // Get racing results
  getRacingResults() {
    const results = [...this.gameState.finishedPlayers];
    
    // Add remaining players as DNF
    this.players.forEach(player => {
      const isFinished = results.some(r => r.playerId === player.id);
      if (!isFinished) {
        results.push({
          playerId: player.id,
          finishOrder: results.length + 1,
          status: 'DNF'
        });
      }
    });
    
    return results.sort((a, b) => a.finishOrder - b.finishOrder);
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
