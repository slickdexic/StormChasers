const { SOCKET_EVENTS, GAME_CONSTANTS } = require('../../../shared/constants');
const { expect } = require('chai');
const sinon = require('sinon');

const GameRoom = require('../models/GameRoom');
const Player = require('../models/Player');
const GameState = require('../models/GameState');

describe('GameRoom', () => {
  let gameRoom;
  let player1, player2;

  beforeEach(() => {
    player1 = new Player('player1', 'Alice');
    player2 = new Player('player2', 'Bob');
    gameRoom = new GameRoom('room1', 'Test Room', player1, {
      laps: 3,
      dice: 1,
      decks: 1,
      cardsPerHand: 5,
      coins: 2
    });
  });

  describe('Player Management', () => {
    it('should add a player successfully', () => {
      const result = gameRoom.addPlayer(player2);
      expect(result).to.be.true;
      expect(gameRoom.players).to.have.length(2);
      expect(gameRoom.players[1]).to.equal(player2);
    });

    it('should not add more than 4 players', () => {
      gameRoom.addPlayer(player2);
      gameRoom.addPlayer(new Player('player3', 'Charlie'));
      gameRoom.addPlayer(new Player('player4', 'Dave'));
      
      const result = gameRoom.addPlayer(new Player('player5', 'Eve'));
      expect(result).to.be.false;
      expect(gameRoom.players).to.have.length(4);
    });

    it('should assign colors to players', () => {
      gameRoom.addPlayer(player2);
      expect(player1.color).to.be.oneOf(GAME_CONSTANTS.COLORS);
      expect(player2.color).to.be.oneOf(GAME_CONSTANTS.COLORS);
      expect(player1.color).to.not.equal(player2.color);
    });

    it('should remove a player', () => {
      gameRoom.addPlayer(player2);
      gameRoom.removePlayer('player2');
      expect(gameRoom.players).to.have.length(1);
      expect(gameRoom.players[0]).to.equal(player1);
    });

    it('should reassign host if host leaves', () => {
      gameRoom.addPlayer(player2);
      gameRoom.removePlayer('player1');
      expect(gameRoom.host).to.equal(player2);
    });
  });

  describe('Dealer Selection', () => {
    beforeEach(() => {
      gameRoom.startGame();
    });

    it('should start dealer selection with 18 cards', () => {
      expect(gameRoom.gameState.currentStage).to.equal('dealer-selection');
      expect(gameRoom.gameState.dealerSelectionCards).to.have.length(18);
    });

    it('should handle card selection', () => {
      const result = gameRoom.selectDealerCard('player1', 0);
      expect(result.success).to.be.true;
      expect(result.card).to.exist;
      expect(gameRoom.gameState.dealerSelectionCards[0].isFlipped).to.be.true;
    });

    it('should not allow selecting already flipped cards', () => {
      gameRoom.selectDealerCard('player1', 0);
      const result = gameRoom.selectDealerCard('player2', 0);
      expect(result.success).to.be.false;
      expect(result.message).to.equal('Card already selected.');
    });

    it('should determine dealer correctly', () => {
      // Mock cards to ensure player1 gets the lowest
      gameRoom.gameState.dealerSelectionCards[0] = { rank: '7', suit: 'hearts', isFlipped: false };
      gameRoom.gameState.dealerSelectionCards[1] = { rank: 'K', suit: 'spades', isFlipped: false };
      
      gameRoom.addPlayer(player2);
      
      gameRoom.selectDealerCard('player1', 0);
      const result = gameRoom.selectDealerCard('player2', 1);
      
      expect(result.success).to.be.true;
      expect(result.dealer).to.exist;
      expect(result.dealer.id).to.equal('player1');
      expect(gameRoom.gameState.dealerId).to.equal('player1');
    });
  });

  describe('Storm Stage', () => {
    beforeEach(() => {
      gameRoom.addPlayer(player2);
      gameRoom.startGame();
      gameRoom.gameState.currentStage = 'storm';
      gameRoom.dealCardsAndStartStorm();
    });

    it('should deal cards to all players', () => {
      expect(player1.cards).to.have.length(5);
      expect(player2.cards).to.have.length(5);
    });

    it('should have discard pile with initial card', () => {
      expect(gameRoom.gameState.discardPile).to.have.length(1);
    });

    it('should validate card plays correctly', () => {
      const validCard = player1.cards.find(card => 
        gameRoom.gameState.isPlayable(card)
      );
      
      if (validCard) {
        const result = gameRoom.playCard('player1', validCard.id);
        expect(result.success).to.be.true;
      }
    });

    it('should handle toxic sevens correctly', () => {
      // Add a seven to discard pile
      gameRoom.gameState.discardPile = [{ rank: '7', suit: 'hearts' }];
      gameRoom.gameState.toxicSevenCount = 1;
      
      const drawCount = gameRoom.gameState.getDrawCount();
      expect(drawCount).to.equal(2);
      
      const result = gameRoom.drawCards('player1');
      expect(result.success).to.be.true;
      expect(result.drawnCards).to.have.length(2);
    });
  });
});

describe('GameState', () => {
  let gameState;

  beforeEach(() => {
    gameState = new GameState(['player1', 'player2']);
  });

  describe('Initialization', () => {
    it('should initialize with correct default values', () => {
      expect(gameState.currentStage).to.equal('lobby');
      expect(gameState.playerIds).to.have.length(2);
      expect(gameState.coinPurse).to.have.length(90);
    });

    it('should initialize track positions for all players', () => {
      expect(gameState.trackPositions.size).to.equal(2);
      expect(gameState.trackPositions.get('player1')).to.deep.include({
        position: 96,
        lane: null,
        lap: 0
      });
    });
  });

  describe('Card Playability', () => {
    beforeEach(() => {
      gameState.discardPile = [{ rank: '8', suit: 'hearts' }];
    });

    it('should allow matching suit', () => {
      const card = { rank: 'K', suit: 'hearts' };
      expect(gameState.isPlayable(card)).to.be.true;
    });

    it('should allow matching rank', () => {
      const card = { rank: '8', suit: 'spades' };
      expect(gameState.isPlayable(card)).to.be.true;
    });

    it('should allow Queens as wild cards', () => {
      const card = { rank: 'Q', suit: 'clubs' };
      expect(gameState.isPlayable(card)).to.be.true;
    });

    it('should restrict plays when toxic seven is active', () => {
      gameState.toxicSevenCount = 1;
      const nonSeven = { rank: '8', suit: 'hearts' };
      const seven = { rank: '7', suit: 'clubs' };
      
      expect(gameState.isPlayable(nonSeven)).to.be.false;
      expect(gameState.isPlayable(seven)).to.be.true;
    });
  });

  describe('Coin System', () => {
    it('should have correct coin distribution', () => {
      const coinCounts = {};
      gameState.coinPurse.forEach(coin => {
        coinCounts[coin.value] = (coinCounts[coin.value] || 0) + 1;
      });
      
      expect(coinCounts[2]).to.equal(16);
      expect(coinCounts[3]).to.equal(12);
      expect(coinCounts[4]).to.equal(8);
      expect(coinCounts[5]).to.equal(6);
      expect(coinCounts[-2]).to.equal(16);
      expect(coinCounts[-3]).to.equal(12);
      expect(coinCounts[-4]).to.equal(8);
      expect(coinCounts[-5]).to.equal(6);
      expect(coinCounts['tow-to-pit']).to.equal(6);
    });
  });
});

describe('Player', () => {
  let player;

  beforeEach(() => {
    player = new Player('player1', 'Alice', 'Red');
  });

  describe('Initialization', () => {
    it('should initialize with correct values', () => {
      expect(player.id).to.equal('player1');
      expect(player.name).to.equal('Alice');
      expect(player.color).to.equal('Red');
      expect(player.cards).to.be.an('array').that.is.empty;
    });
  });

  describe('Card Management', () => {
    it('should add cards to hand', () => {
      const cards = [
        { id: 'card1', rank: '8', suit: 'hearts' },
        { id: 'card2', rank: 'K', suit: 'spades' }
      ];
      player.addCards(cards);
      expect(player.cards).to.have.length(2);
    });

    it('should remove cards from hand', () => {
      const cards = [
        { id: 'card1', rank: '8', suit: 'hearts' },
        { id: 'card2', rank: 'K', suit: 'spades' }
      ];
      player.addCards(cards);
      
      const removedCard = player.removeCard('card1');
      expect(removedCard).to.deep.equal(cards[0]);
      expect(player.cards).to.have.length(1);
    });
  });

  describe('Game State Reset', () => {
    it('should reset game state correctly', () => {
      player.cards = [{ id: 'card1' }];
      player.coins = [{ id: 'coin1' }];
      player.isReady = true;
      
      player.resetGameState();
      
      expect(player.cards).to.be.empty;
      expect(player.coins).to.be.empty;
      expect(player.isReady).to.be.false;
      expect(player.name).to.equal('Alice'); // Should preserve identity
      expect(player.color).to.equal('Red'); // Should preserve color
    });
  });
});
