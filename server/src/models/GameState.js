class GameState {
  constructor() {
    this.currentStage = 'lobby'; // lobby, dealer-selection, storm, lane-selection, coin, racing
    this.currentPlayerIndex = 0;
    this.dealerIndex = 0;
    this.stormRound = 0;
    this.raceRound = 0;
    this.currentLap = 1;
    
    // Storm stage state
    this.deck = [];
    this.discardPile = [];
    this.toxicSevenCount = 0;
    this.currentSuit = null; // For Queen plays
    this.stormComplete = false; // Flag when Storm stage ends
    this.dealerSelectionCards = []; // 18 cards for dealer selection
    this.selectedDealerCards = new Map(); // playerId -> card
    
    // Racing state
    this.coinPurse = [];
    this.placedCoins = new Map(); // position -> coin
    this.finishedPlayers = [];
    this.trackPositions = new Map(); // playerId -> {position, lane, lap, inPit, inPitLane}
    
    // Game flow
    this.stageResults = [];
    this.gameComplete = false;
  }

  // Initialize a new game
  initializeGame(settings) {
    this.currentStage = 'dealer-selection';
    this.currentPlayerIndex = 0;
    this.dealerIndex = 0;
    this.stormRound = 0;
    this.raceRound = 0;
    this.currentLap = 1;
    
    this.resetStormState();
    this.initializeCoinPurse();
    this.initializeDealerSelectionCards();
    this.stageResults = [];
    this.gameComplete = false;
  }

  // Initialize dealer selection cards (18 cards in 3 rows of 6)
  initializeDealerSelectionCards() {
    const ranks = ['7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    
    this.dealerSelectionCards = [];
    
    // Create a full deck for dealer selection
    ranks.forEach(rank => {
      suits.forEach(suit => {
        this.dealerSelectionCards.push({
          rank: rank,
          suit: suit,
          id: `dealer-${rank}-${suit}`,
          selected: false,
          selectedBy: null
        });
      });
    });
    
    // Shuffle and take 18 cards
    this.shuffleArray(this.dealerSelectionCards);
    this.dealerSelectionCards = this.dealerSelectionCards.slice(0, 18);
    
    this.selectedDealerCards.clear();
  }

  // Helper function to shuffle array
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Select a dealer card
  selectDealerCard(cardIndex, playerId) {
    if (cardIndex < 0 || cardIndex >= this.dealerSelectionCards.length) {
      return false;
    }
    
    const card = this.dealerSelectionCards[cardIndex];
    if (card.selected) {
      return false;
    }
    
    card.selected = true;
    card.selectedBy = playerId;
    this.selectedDealerCards.set(playerId, card);
    
    return card;
  }

  // Determine dealer from selected cards
  determineDealer(playerIds) {
    const cardValues = {
      '7': 7, '8': 8, '9': 9, '10': 10, 
      'J': 11, 'Q': 12, 'K': 13, 'A': 14
    };
    
    let lowestValue = Infinity;
    let dealerPlayerId = null;
    let tiedPlayers = [];
    
    for (const playerId of playerIds) {
      const card = this.selectedDealerCards.get(playerId);
      if (card) {
        const value = cardValues[card.rank];
        if (value < lowestValue) {
          lowestValue = value;
          dealerPlayerId = playerId;
          tiedPlayers = [playerId];
        } else if (value === lowestValue) {
          tiedPlayers.push(playerId);
        }
      }
    }
    
    // Return tie information
    return {
      dealerPlayerId: tiedPlayers.length === 1 ? dealerPlayerId : null,
      tiedPlayers: tiedPlayers.length > 1 ? tiedPlayers : [],
      lowestValue
    };
  }

  // Reset dealer selection for tie resolution
  resetDealerSelection(tiedPlayerIds) {
    // Clear only the tied players' selections
    for (const playerId of tiedPlayerIds) {
      const card = this.selectedDealerCards.get(playerId);
      if (card) {
        card.selected = false;
        card.selectedBy = null;
      }
      this.selectedDealerCards.delete(playerId);
    }
  }
  // Reset storm-specific state
  resetStormState() {
    console.log('🔄 resetStormState called - clearing deck and toxicSevenCount');
    this.deck = [];
    this.discardPile = [];
    this.toxicSevenCount = 0;
    this.currentSuit = null;
    this.stormComplete = false;
  }

  // Initialize track positions for all players
  initializeTrackPositions(playerIds) {
    this.trackPositions.clear();
    for (const playerId of playerIds) {
      this.trackPositions.set(playerId, {
        position: 96, // Starting position (pole position)
        lane: null,   // Will be set during lane selection
        lap: 0,       // Current lap
        inPit: false,
        inPitLane: false,
        pitLanePosition: 0
      });
    }
  }

  // Update player position
  updatePlayerPosition(playerId, newPosition, newLane = null, newLap = null) {
    const current = this.trackPositions.get(playerId);
    if (current) {
      if (newPosition !== null) current.position = newPosition;
      if (newLane !== null) current.lane = newLane;
      if (newLap !== null) current.lap = newLap;
      
      // Handle lap completion (crossing finish line)
      if (newPosition === 1 && current.position === 96) {
        current.lap++;
      }
    }
  }

  // Set player lane (for lane selection stage)
  setPlayerLane(playerId, lane) {
    const current = this.trackPositions.get(playerId);
    if (current && lane >= 1 && lane <= 4) {
      current.lane = lane;
      return true;
    }
    return false;
  }

  // Move player to pit
  movePlayerToPit(playerId) {
    const current = this.trackPositions.get(playerId);
    if (current) {
      current.inPit = true;
      current.inPitLane = false;
      current.pitLanePosition = 0;
    }
  }

  // Move player to pit lane
  movePlayerToPitLane(playerId, pitLanePosition = 1) {
    const current = this.trackPositions.get(playerId);
    if (current && pitLanePosition >= 1 && pitLanePosition <= 5) {
      current.inPit = false;
      current.inPitLane = true;
      current.pitLanePosition = pitLanePosition;
    }
  }

  // Move player back to main track
  movePlayerToMainTrack(playerId, position, lane) {
    const current = this.trackPositions.get(playerId);
    if (current) {
      current.inPit = false;
      current.inPitLane = false;
      current.pitLanePosition = 0;
      current.position = position;
      current.lane = lane;
    }
  }

  // Initialize the coin purse with proper distribution
  initializeCoinPurse() {
    this.coinPurse = [];
    
    // Add coins according to the specification
    // +2 (16 coins), +3 (12 coins), +4 (8 coins), +5 (6 coins)
    // -2 (16 coins), -3 (12 coins), -4 (8 coins), -5 (6 coins)
    // Tow-to-Pit (6 coins)
    
    const coinTypes = [
      { value: 2, count: 16 },
      { value: 3, count: 12 },
      { value: 4, count: 8 },
      { value: 5, count: 6 },
      { value: -2, count: 16 },
      { value: -3, count: 12 },
      { value: -4, count: 8 },
      { value: -5, count: 6 },
      { value: 'tow-to-pit', count: 6 }
    ];

    coinTypes.forEach(coinType => {
      for (let i = 0; i < coinType.count; i++) {
        this.coinPurse.push({
          id: `${coinType.value}-${i}`,
          value: coinType.value,
          type: coinType.value === 'tow-to-pit' ? 'special' : 'movement'
        });
      }
    });

    // Shuffle the coin purse
    this.shuffleCoinPurse();
  }

  // Shuffle the coin purse
  shuffleCoinPurse() {
    for (let i = this.coinPurse.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.coinPurse[i], this.coinPurse[j]] = [this.coinPurse[j], this.coinPurse[i]];
    }
  }

  // Draw coins from the purse
  drawCoins(count) {
    const drawnCoins = [];
    for (let i = 0; i < count && this.coinPurse.length > 0; i++) {
      drawnCoins.push(this.coinPurse.pop());
    }
    return drawnCoins;
  }

  // Create and shuffle a deck based on settings
  createDeck(settings) {
    const ranks = ['7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    
    this.deck = [];
    
    // Create deck(s) - ensuring every card has a unique ID
    for (let deckCount = 0; deckCount < settings.numberOfDecks; deckCount++) {
      ranks.forEach(rank => {
        suits.forEach(suit => {
          this.deck.push({
            rank: rank,
            suit: suit,
            id: `${rank}-${suit}-${deckCount}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
          });
        });
      });
    }
    
    // Shuffle the deck
    this.shuffleDeck();
    
    console.log(`🎴 Created deck with ${this.deck.length} cards, each with unique ID`);
  }

  // Shuffle the deck
  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  // Draw a card from the deck
  drawCard() {
    // If deck is empty, reshuffle discard pile (except top card)
    if (this.deck.length === 0 && this.discardPile.length > 1) {
      console.log('🔄 Deck empty! Reshuffling discard pile...');
      
      // Keep the top card as the current discard
      const topCard = this.discardPile.pop();
      
      // Move all other discard cards back to deck
      this.deck = [...this.discardPile];
      this.discardPile = [topCard];
      
      // Shuffle the new deck
      this.shuffleDeck();
      
      console.log(`✅ Reshuffled ${this.deck.length} cards back to deck`);
    }
    
    return this.deck.pop();
  }

  // Deal cards to players for Storm stage
  dealCardsToPlayers(players, cardsPerPlayer) {
    const hands = new Map();
    
    // Initialize hands
    for (const player of players) {
      hands.set(player.id, []);
    }
    
    // Deal cards one at a time clockwise (GameDevGuide requirement)
    // Start with player after dealer, go clockwise until each has correct number
    for (let cardRound = 0; cardRound < cardsPerPlayer; cardRound++) {
      for (const player of players) {
        if (this.deck.length > 0) {
          const card = this.drawCard();
          hands.get(player.id).push(card);
        }
      }
    }
    
    // Turn over one card to start discard pile
    if (this.deck.length > 0) {
      const firstCard = this.drawCard();
      this.discardPile.push(firstCard);
      
      console.log(`🔄 Initial discard card dealt: ${firstCard.rank} of ${firstCard.suit} (ID: ${firstCard.id})`);
      
      // Handle special initial card rules
      if (firstCard.rank === 'Q') {
        // Queen calls the suit of the bottom card in the deck
        if (this.deck.length > 0) {
          this.currentSuit = this.deck[0].suit;
          console.log(`👸 Queen calls suit: ${this.currentSuit}`);
        }
      } else if (firstCard.rank === '7') {
        // 7 as first card is considered toxic immediately
        this.toxicSevenCount = 1;
        console.log(`☠️ Seven is TOXIC! toxicSevenCount set to: ${this.toxicSevenCount}`);
        console.log(`🔍 Current discard pile:`, this.discardPile.map(c => `${c.rank} of ${c.suit}`));
      }
    }
    
    console.log(`🎯 Final dealing state - toxicSevenCount: ${this.toxicSevenCount}, topCard: ${this.getTopCard()?.rank || 'none'}`);
    
    return hands;
  }
  drawCards(count) {
    const cards = [];
    for (let i = 0; i < count; i++) {
      // Check if deck is empty before drawing
      if (this.deck.length === 0 && this.discardPile.length <= 1) {
        console.log('⚠️ No more cards available to draw!');
        break; // No more cards available
      }
      
      const card = this.drawCard();
      if (card) {
        cards.push(card);
      } else {
        break; // No more cards
      }
    }
    return cards;
  }

  // Play a card to the discard pile
  playCard(card, calledSuit = null) {
    this.discardPile.push(card);
    
  // Handle special card effects
  if (card.rank === 'Q' && calledSuit) {
    this.currentSuit = calledSuit;
    // Don't reset toxic seven count - Queens can be played on non-toxic sevens
  } else if (card.rank === '7') {
    // Check if this 7 is being played on a toxic 7 (stacking) or starting new toxic effect
    const topCard = this.getTopCard();
    if (this.toxicSevenCount > 0) {
      // Stacking on existing toxic 7 - add to count
      this.toxicSevenCount += 1;
    } else {
      // Playing 7 on non-toxic card - starts new toxic effect
      this.toxicSevenCount = 1;
    }
    this.currentSuit = null; // Reset Queen suit when toxic 7 is played
  } else {
    // Reset toxic seven count for non-Queen, non-seven plays
    this.toxicSevenCount = 0;
    this.currentSuit = null;
  }
  }

  // Get the top card of the discard pile
  getTopCard() {
    return this.discardPile.length > 0 ? this.discardPile[this.discardPile.length - 1] : null;
  }

  // Check if a card can be played
  canPlayCard(card, topCard) {
    if (!topCard) return true;
    
    // If there's a toxic seven, only sevens can be played
    if (this.toxicSevenCount > 0) {
      return card.rank === '7';
    }
    
    // Queen can be played on anything EXCEPT toxic 7 (but we already checked above)
    if (card.rank === 'Q') {
      return true; // Queens are wild cards when no toxic 7 is active
    }
    
    // Check suit or rank match
    const effectiveSuit = this.currentSuit || topCard.suit;
    return card.suit === effectiveSuit || card.rank === topCard.rank;
  }

  // Advance to next stage
  nextStage() {
    console.log(`🎯 GameState.nextStage() called. Current stage: ${this.currentStage}, stormRound: ${this.stormRound}`);
    
    // Special handling for post-storm progression
    if (this.currentStage === 'storm') {
      if (this.stormRound === 1) {
        // First storm, go to lane selection
        console.log(`🛣️ First storm completed, advancing to lane-selection`);
        this.currentStage = 'lane-selection';
      } else {
        // Subsequent storms, go to coin stage
        console.log(`🪙 Subsequent storm completed, advancing to coin`);
        this.currentStage = 'coin';
      }
      return;
    }
    
    // Normal linear progression for other stages
    const stageOrder = ['lobby', 'dealer-selection', 'storm', 'lane-selection', 'coin', 'racing'];
    const currentIndex = stageOrder.indexOf(this.currentStage);
    
    if (currentIndex < stageOrder.length - 1) {
      this.currentStage = stageOrder[currentIndex + 1];
      
      // Special handling for certain stage transitions
      if (this.currentStage === 'storm') {
        this.stormRound++;
        console.log(`⛈️ Storm round incremented to: ${this.stormRound}`);
      } else if (this.currentStage === 'racing') {
        this.raceRound++;
      }
    }
  }

  // Check if game should advance to next lap/round
  shouldAdvanceToNextRound(settings) {
    // After racing stage, check if anyone won
    if (this.currentStage === 'racing' && this.finishedPlayers.length > 0) {
      // Check if winner completed all laps
      const winner = this.finishedPlayers[0];
      const winnerPosition = this.trackPositions.get(winner.playerId);
      
      if (winnerPosition && winnerPosition.lap >= settings.numberOfLaps) {
        this.gameComplete = true;
        return false; // Game is complete
      }
    }
    
    // If not complete, continue with next round (back to storm stage)
    if (this.currentStage === 'racing' && !this.gameComplete) {
      this.currentStage = 'storm';
      this.resetStormState();
      return true;
    }
    
    return false;
  }

  // JSON representation
  toJSON() {
    return {
      currentStage: this.currentStage,
      currentPlayerIndex: this.currentPlayerIndex,
      dealerIndex: this.dealerIndex,
      stormRound: this.stormRound,
      raceRound: this.raceRound,
      currentLap: this.currentLap,
      deckSize: this.deck.length,
      discardPileSize: this.discardPile.length,
      topCard: this.getTopCard(),
      toxicSevenCount: this.toxicSevenCount,
      currentSuit: this.currentSuit,
      stormComplete: this.stormComplete,
      coinPurseSize: this.coinPurse.length,
      finishedPlayers: this.finishedPlayers,
      gameComplete: this.gameComplete,
      dealerSelectionCards: this.dealerSelectionCards,
      selectedDealerCards: Object.fromEntries(this.selectedDealerCards),
      trackPositions: Object.fromEntries(this.trackPositions),
      placedCoins: Object.fromEntries(this.placedCoins)
    };
  }
}

module.exports = GameState;
