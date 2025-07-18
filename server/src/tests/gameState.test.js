const { expect } = require('chai');
const sinon = require('sinon');
const GameState = require('../models/GameState');
const { EVENTS, ACTIONS, GAME_STAGES } = require('../../../shared/constants');

describe('GameState - Advanced Logic', () => {
  let gameState;
  let mockSocket;
  let mockRoom;

  beforeEach(() => {
    mockSocket = {
      id: 'socket1',
      emit: sinon.spy(),
      join: sinon.spy(),
      leave: sinon.spy()
    };

    mockRoom = {
      id: 'room1',
      players: [],
      gameState: null,
      broadcast: sinon.spy()
    };

    gameState = new GameState(mockRoom.id);
  });

  describe('Game Initialization', () => {
    it('should initialize with correct default values', () => {
      expect(gameState.stage).to.equal(GAME_STAGES.WAITING);
      expect(gameState.round).to.equal(0);
      expect(gameState.players).to.be.an('array').that.is.empty;
      expect(gameState.deck).to.be.null;
      expect(gameState.currentPlayerIndex).to.equal(0);
    });

    it('should transition to dealer selection when game starts', () => {
      const players = [
        { id: 'p1', name: 'Player 1' },
        { id: 'p2', name: 'Player 2' }
      ];

      gameState.startGame(players);

      expect(gameState.stage).to.equal(GAME_STAGES.DEALER_SELECTION);
      expect(gameState.players).to.have.length(2);
      expect(gameState.round).to.equal(1);
    });

    it('should create deck with correct number of cards', () => {
      const players = [
        { id: 'p1', name: 'Player 1' },
        { id: 'p2', name: 'Player 2' }
      ];

      gameState.startGame(players);

      // Standard deck has 52 cards
      expect(gameState.deck.cards).to.have.length(52);
    });
  });

  describe('Player Management', () => {
    beforeEach(() => {
      gameState.startGame([
        { id: 'p1', name: 'Player 1' },
        { id: 'p2', name: 'Player 2' },
        { id: 'p3', name: 'Player 3' }
      ]);
    });

    it('should add player correctly', () => {
      const newPlayer = { id: 'p4', name: 'Player 4' };
      gameState.addPlayer(newPlayer);

      expect(gameState.players).to.have.length(4);
      expect(gameState.players[3]).to.deep.include(newPlayer);
    });

    it('should remove player correctly', () => {
      gameState.removePlayer('p2');

      expect(gameState.players).to.have.length(2);
      expect(gameState.players.find(p => p.id === 'p2')).to.be.undefined;
    });

    it('should adjust current player index when player is removed', () => {
      gameState.currentPlayerIndex = 2; // Player 3
      gameState.removePlayer('p1'); // Remove Player 1

      expect(gameState.currentPlayerIndex).to.equal(1); // Should now point to Player 3
    });

    it('should handle removing current player', () => {
      gameState.currentPlayerIndex = 1; // Player 2
      gameState.removePlayer('p2'); // Remove current player

      expect(gameState.currentPlayerIndex).to.equal(1); // Should move to next player
    });
  });

  describe('Betting Phase', () => {
    beforeEach(() => {
      gameState.startGame([
        { id: 'p1', name: 'Player 1', chips: 1000 },
        { id: 'p2', name: 'Player 2', chips: 1000 },
        { id: 'p3', name: 'Player 3', chips: 1000 }
      ]);
      gameState.stage = GAME_STAGES.BETTING;
    });

    it('should allow valid bet placement', () => {
      const result = gameState.placeBet('p1', 100);

      expect(result).to.be.true;
      expect(gameState.getPlayer('p1').currentBet).to.equal(100);
      expect(gameState.getPlayer('p1').chips).to.equal(900);
    });

    it('should reject bet exceeding player chips', () => {
      const result = gameState.placeBet('p1', 1500);

      expect(result).to.be.false;
      expect(gameState.getPlayer('p1').currentBet).to.equal(0);
      expect(gameState.getPlayer('p1').chips).to.equal(1000);
    });

    it('should reject negative or zero bets', () => {
      expect(gameState.placeBet('p1', 0)).to.be.false;
      expect(gameState.placeBet('p1', -50)).to.be.false;
    });

    it('should calculate total pot correctly', () => {
      gameState.placeBet('p1', 100);
      gameState.placeBet('p2', 200);
      gameState.placeBet('p3', 150);

      expect(gameState.getTotalPot()).to.equal(450);
    });

    it('should allow bet modification before betting phase ends', () => {
      gameState.placeBet('p1', 100);
      gameState.placeBet('p1', 200); // Modify bet

      expect(gameState.getPlayer('p1').currentBet).to.equal(200);
      expect(gameState.getPlayer('p1').chips).to.equal(800);
    });
  });

  describe('Card Management', () => {
    beforeEach(() => {
      gameState.startGame([
        { id: 'p1', name: 'Player 1' },
        { id: 'p2', name: 'Player 2' }
      ]);
    });

    it('should deal cards to players', () => {
      gameState.dealCards(5);

      gameState.players.forEach(player => {
        expect(player.hand).to.have.length(5);
      });
    });

    it('should not deal more cards than available in deck', () => {
      // Try to deal more cards than exist
      const result = gameState.dealCards(30); // 30 cards per player, 60 total > 52

      expect(result).to.be.false;
    });

    it('should handle player drawing cards', () => {
      gameState.stage = GAME_STAGES.GAMEPLAY;
      const player = gameState.getPlayer('p1');
      const initialHandSize = player.hand.length;

      gameState.drawCard('p1');

      expect(player.hand).to.have.length(initialHandSize + 1);
    });

    it('should validate card ownership before playing', () => {
      gameState.stage = GAME_STAGES.GAMEPLAY;
      gameState.dealCards(3);
      
      const fakeCard = { suit: 'hearts', value: 'A', id: 'fake-card' };
      const result = gameState.playCard('p1', fakeCard);

      expect(result).to.be.false;
    });
  });

  describe('Turn Management', () => {
    beforeEach(() => {
      gameState.startGame([
        { id: 'p1', name: 'Player 1' },
        { id: 'p2', name: 'Player 2' },
        { id: 'p3', name: 'Player 3' }
      ]);
      gameState.stage = GAME_STAGES.GAMEPLAY;
    });

    it('should advance turn to next player', () => {
      expect(gameState.currentPlayerIndex).to.equal(0);
      
      gameState.nextTurn();
      
      expect(gameState.currentPlayerIndex).to.equal(1);
    });

    it('should wrap around to first player after last player', () => {
      gameState.currentPlayerIndex = 2; // Last player
      
      gameState.nextTurn();
      
      expect(gameState.currentPlayerIndex).to.equal(0);
    });

    it('should skip eliminated players', () => {
      gameState.players[1].eliminated = true;
      gameState.currentPlayerIndex = 0;
      
      gameState.nextTurn();
      
      expect(gameState.currentPlayerIndex).to.equal(2); // Skip player 1
    });

    it('should identify current player correctly', () => {
      const currentPlayer = gameState.getCurrentPlayer();
      
      expect(currentPlayer.id).to.equal('p1');
    });

    it('should validate if it is players turn', () => {
      expect(gameState.isPlayerTurn('p1')).to.be.true;
      expect(gameState.isPlayerTurn('p2')).to.be.false;
    });
  });

  describe('Game State Validation', () => {
    beforeEach(() => {
      gameState.startGame([
        { id: 'p1', name: 'Player 1' },
        { id: 'p2', name: 'Player 2' }
      ]);
    });

    it('should validate minimum players for game start', () => {
      const singlePlayerGame = new GameState('test');
      const result = singlePlayerGame.startGame([
        { id: 'p1', name: 'Player 1' }
      ]);

      expect(result).to.be.false;
    });

    it('should validate maximum players', () => {
      const tooManyPlayers = Array.from({ length: 9 }, (_, i) => ({
        id: `p${i + 1}`,
        name: `Player ${i + 1}`
      }));

      const result = gameState.startGame(tooManyPlayers);

      expect(result).to.be.false;
    });

    it('should check if game can end', () => {
      gameState.stage = GAME_STAGES.GAMEPLAY;
      
      // Initially should not be able to end
      expect(gameState.canEndGame()).to.be.false;
      
      // Eliminate all but one player
      gameState.players[1].eliminated = true;
      
      expect(gameState.canEndGame()).to.be.true;
    });

    it('should determine winner correctly', () => {
      gameState.players[0].position = 1;
      gameState.players[1].position = 0;
      
      const winner = gameState.getWinner();
      
      expect(winner.id).to.equal('p1');
    });
  });

  describe('Error Handling', () => {
    it('should handle invalid player IDs gracefully', () => {
      gameState.startGame([
        { id: 'p1', name: 'Player 1' },
        { id: 'p2', name: 'Player 2' }
      ]);

      expect(() => {
        gameState.placeBet('invalid-id', 100);
      }).to.not.throw();

      expect(() => {
        gameState.drawCard('invalid-id');
      }).to.not.throw();
    });

    it('should handle empty deck scenarios', () => {
      gameState.startGame([
        { id: 'p1', name: 'Player 1' },
        { id: 'p2', name: 'Player 2' }
      ]);

      // Exhaust the deck
      gameState.deck.cards = [];
      
      const result = gameState.drawCard('p1');
      
      expect(result).to.be.false;
    });

    it('should maintain state consistency after errors', () => {
      gameState.startGame([
        { id: 'p1', name: 'Player 1' },
        { id: 'p2', name: 'Player 2' }
      ]);

      const initialState = JSON.parse(JSON.stringify(gameState.getState()));
      
      // Attempt invalid operations
      gameState.placeBet('invalid-id', 100);
      gameState.drawCard('invalid-id');
      
      // State should remain consistent
      expect(gameState.players).to.have.length(2);
      expect(gameState.round).to.equal(initialState.round);
    });
  });

  describe('Serialization', () => {
    beforeEach(() => {
      gameState.startGame([
        { id: 'p1', name: 'Player 1', chips: 1000 },
        { id: 'p2', name: 'Player 2', chips: 1000 }
      ]);
    });

    it('should serialize state for client correctly', () => {
      const state = gameState.getState();

      expect(state).to.have.property('stage');
      expect(state).to.have.property('round');
      expect(state).to.have.property('players');
      expect(state).to.have.property('currentPlayerIndex');
    });

    it('should serialize player data correctly', () => {
      const state = gameState.getState();

      state.players.forEach(player => {
        expect(player).to.have.property('id');
        expect(player).to.have.property('name');
        expect(player).to.have.property('chips');
        expect(player).to.have.property('position');
      });
    });

    it('should not expose sensitive data in client state', () => {
      const state = gameState.getState();

      // Deck should not be fully exposed to prevent cheating
      if (state.deck) {
        expect(state.deck.cards).to.be.undefined;
        expect(state.deck).to.have.property('count');
      }
    });
  });
});
