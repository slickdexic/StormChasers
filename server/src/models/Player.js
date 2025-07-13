class Player {
  constructor(id, name, color = null) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.roomId = null;
    this.isHost = false;
    this.isReady = false;
    
    // Game-specific state
    this.cards = [];
    this.position = 96; // Starting position (pole position)
    this.lane = null; // Starting lane (set during lane selection)
    this.lap = 0;
    this.coins = [];
    this.finishOrder = null; // 1st, 2nd, 3rd, 4th for Storm stage
    this.finalRacePosition = null; // Final racing position
    this.isActive = false; // Current turn indicator
    this.dealerButton = false; // Has dealer button
    
    // Stage-specific state
    this.stormFinishOrder = null; // Storm stage finishing position
    this.selectedDealerCard = null; // Card selected in dealer selection
    this.drawnCoins = []; // Coins drawn for current round
    this.inPit = false;
    this.inPitLane = false;
    this.pitLanePosition = 0;
  }

  // Get available colors that aren't taken by other players in the room
  static getAvailableColors(room, excludePlayerId = null) {
    const allColors = [
      'yellow', 'orange', 'red', 'pink', 
      'purple', 'blue', 'green', 'black'
    ];
    
    const takenColors = room.players
      .filter(p => p.id !== excludePlayerId)
      .map(p => p.color);
    
    return allColors.filter(color => !takenColors.includes(color));
  }

  // Assign a random available color
  assignRandomColor(room) {
    const availableColors = Player.getAvailableColors(room, this.id);
    if (availableColors.length > 0) {
      this.color = availableColors[Math.floor(Math.random() * availableColors.length)];
    }
  }

  // Reset game state for new game
  resetGameState() {
    this.cards = [];
    this.position = 96;
    this.lane = null;
    this.lap = 0;
    this.coins = [];
    this.finishOrder = null;
    this.finalRacePosition = null;
    this.isActive = false;
    this.isReady = false;
    this.dealerButton = false;
    this.stormFinishOrder = null;
    this.selectedDealerCard = null;
    this.drawnCoins = [];
    this.inPit = false;
    this.inPitLane = false;
    this.pitLanePosition = 0;
  }

  // Set Storm stage finish order
  setStormFinishOrder(order) {
    this.stormFinishOrder = order;
    this.finishOrder = order; // For backward compatibility
  }

  // Award dealer button
  setDealerButton(isDealer) {
    this.dealerButton = isDealer;
  }

  // Add cards to hand
  addCards(cards) {
    this.cards.push(...cards);
  }

  // Remove a card from hand
  removeCard(cardId) {
    const index = this.cards.findIndex(card => card.id === cardId);
    if (index !== -1) {
      return this.cards.splice(index, 1)[0];
    }
    return null;
  }

  // Check if player has no cards (finished Storm stage)
  hasFinishedStorm() {
    return this.cards.length === 0;
  }

  // Draw coins for coin stage
  drawCoins(coins) {
    this.drawnCoins = coins;
  }

  // Place a coin on the track
  placeCoin(coinId) {
    const coinIndex = this.drawnCoins.findIndex(coin => coin.id === coinId);
    if (coinIndex !== -1) {
      return this.drawnCoins.splice(coinIndex, 1)[0];
    }
    return null;
  }

  // Move to pit
  moveToPit() {
    this.inPit = true;
    this.inPitLane = false;
    this.pitLanePosition = 0;
  }

  // Move to pit lane
  moveToPitLane(position = 1) {
    this.inPit = false;
    this.inPitLane = true;
    this.pitLanePosition = position;
  }

  // Move to main track
  moveToMainTrack(position, lane) {
    this.inPit = false;
    this.inPitLane = false;
    this.pitLanePosition = 0;
    this.position = position;
    this.lane = lane;
  }

  // JSON representation for client
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      color: this.color,
      isHost: this.isHost,
      isReady: this.isReady,
      isActive: this.isActive,
      position: this.position,
      lane: this.lane,
      lap: this.lap,
      cardCount: this.cards.length,
      coinCount: this.coins.length,
      drawnCoinCount: this.drawnCoins.length,
      finishOrder: this.finishOrder,
      stormFinishOrder: this.stormFinishOrder,
      finalRacePosition: this.finalRacePosition,
      dealerButton: this.dealerButton,
      selectedDealerCard: this.selectedDealerCard,
      inPit: this.inPit,
      inPitLane: this.inPitLane,
      pitLanePosition: this.pitLanePosition
    };
  }

  // Get detailed JSON for the player themselves (includes private info)
  toDetailedJSON() {
    return {
      ...this.toJSON(),
      cards: this.cards,
      coins: this.coins,
      drawnCoins: this.drawnCoins
    };
  }
}

module.exports = Player;
