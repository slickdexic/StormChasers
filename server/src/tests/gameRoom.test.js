const { expect } = require('chai');
const sinon = require('sinon');
const GameRoom = require('../models/GameRoom');
const { EVENTS, ACTIONS, GAME_STAGES } = require('../../../shared/constants');

describe('GameRoom - Integration Tests', () => {
  let gameRoom;
  let mockSocket1, mockSocket2, mockSocket3;

  beforeEach(() => {
    gameRoom = new GameRoom('test-room', 'Test Room');
    
    mockSocket1 = {
      id: 'socket1',
      emit: sinon.spy(),
      join: sinon.spy(),
      leave: sinon.spy(),
      to: sinon.stub().returns({
        emit: sinon.spy()
      })
    };

    mockSocket2 = {
      id: 'socket2',
      emit: sinon.spy(),
      join: sinon.spy(),
      leave: sinon.spy(),
      to: sinon.stub().returns({
        emit: sinon.spy()
      })
    };

    mockSocket3 = {
      id: 'socket3',
      emit: sinon.spy(),
      join: sinon.spy(),
      leave: sinon.spy(),
      to: sinon.stub().returns({
        emit: sinon.spy()
      })
    };
  });

  describe('Room Creation and Setup', () => {
    it('should create room with correct initial state', () => {
      expect(gameRoom.id).to.equal('test-room');
      expect(gameRoom.name).to.equal('Test Room');
      expect(gameRoom.players).to.be.an('array').that.is.empty;
      expect(gameRoom.gameState).to.be.null;
      expect(gameRoom.isActive).to.be.false;
    });

    it('should set first player as host', () => {
      gameRoom.addPlayer(mockSocket1, 'Player 1');
      
      expect(gameRoom.players[0].isHost).to.be.true;
    });

    it('should transfer host when host leaves', () => {
      gameRoom.addPlayer(mockSocket1, 'Player 1');
      gameRoom.addPlayer(mockSocket2, 'Player 2');
      
      expect(gameRoom.players[0].isHost).to.be.true;
      expect(gameRoom.players[1].isHost).to.be.false;
      
      gameRoom.removePlayer('socket1');
      
      expect(gameRoom.players[0].isHost).to.be.true;
      expect(gameRoom.players[0].id).to.equal('socket2');
    });
  });

  describe('Player Management', () => {
    it('should add players correctly', () => {
      gameRoom.addPlayer(mockSocket1, 'Player 1');
      gameRoom.addPlayer(mockSocket2, 'Player 2');
      
      expect(gameRoom.players).to.have.length(2);
      expect(gameRoom.players[0].name).to.equal('Player 1');
      expect(gameRoom.players[1].name).to.equal('Player 2');
    });

    it('should prevent duplicate player IDs', () => {
      gameRoom.addPlayer(mockSocket1, 'Player 1');
      const result = gameRoom.addPlayer(mockSocket1, 'Player 1 Again');
      
      expect(result).to.be.false;
      expect(gameRoom.players).to.have.length(1);
    });

    it('should enforce maximum players limit', () => {
      // Add maximum players (assuming limit is 8)
      for (let i = 1; i <= 8; i++) {
        const mockSocket = { id: `socket${i}`, emit: sinon.spy(), join: sinon.spy() };
        gameRoom.addPlayer(mockSocket, `Player ${i}`);
      }
      
      const extraSocket = { id: 'socket9', emit: sinon.spy(), join: sinon.spy() };
      const result = gameRoom.addPlayer(extraSocket, 'Player 9');
      
      expect(result).to.be.false;
      expect(gameRoom.players).to.have.length(8);
    });

    it('should handle player disconnection during game', () => {
      gameRoom.addPlayer(mockSocket1, 'Player 1');
      gameRoom.addPlayer(mockSocket2, 'Player 2');
      gameRoom.addPlayer(mockSocket3, 'Player 3');
      
      gameRoom.startGame();
      expect(gameRoom.isActive).to.be.true;
      
      gameRoom.removePlayer('socket2');
      
      expect(gameRoom.players).to.have.length(2);
      expect(gameRoom.isActive).to.be.true; // Game should continue
    });

    it('should end game if too few players remain', () => {
      gameRoom.addPlayer(mockSocket1, 'Player 1');
      gameRoom.addPlayer(mockSocket2, 'Player 2');
      
      gameRoom.startGame();
      expect(gameRoom.isActive).to.be.true;
      
      gameRoom.removePlayer('socket2');
      
      expect(gameRoom.isActive).to.be.false; // Game should end with only 1 player
    });
  });

  describe('Game Flow', () => {
    beforeEach(() => {
      gameRoom.addPlayer(mockSocket1, 'Player 1');
      gameRoom.addPlayer(mockSocket2, 'Player 2');
      gameRoom.addPlayer(mockSocket3, 'Player 3');
    });

    it('should start game with minimum players', () => {
      const result = gameRoom.startGame();
      
      expect(result).to.be.true;
      expect(gameRoom.isActive).to.be.true;
      expect(gameRoom.gameState).to.not.be.null;
    });

    it('should not start game with insufficient players', () => {
      const singlePlayerRoom = new GameRoom('single', 'Single');
      singlePlayerRoom.addPlayer(mockSocket1, 'Player 1');
      
      const result = singlePlayerRoom.startGame();
      
      expect(result).to.be.false;
      expect(singlePlayerRoom.isActive).to.be.false;
    });

    it('should progress through game stages', () => {
      gameRoom.startGame();
      
      expect(gameRoom.gameState.stage).to.equal(GAME_STAGES.DEALER_SELECTION);
      
      // Simulate dealer selection completion
      gameRoom.gameState.stage = GAME_STAGES.BETTING;
      
      expect(gameRoom.gameState.stage).to.equal(GAME_STAGES.BETTING);
    });

    it('should handle game completion', () => {
      gameRoom.startGame();
      
      // Simulate game completion
      gameRoom.gameState.stage = GAME_STAGES.RESULTS;
      gameRoom.endGame();
      
      expect(gameRoom.isActive).to.be.false;
    });
  });

  describe('Event Broadcasting', () => {
    beforeEach(() => {
      gameRoom.addPlayer(mockSocket1, 'Player 1');
      gameRoom.addPlayer(mockSocket2, 'Player 2');
    });

    it('should broadcast to all players', () => {
      gameRoom.broadcast(EVENTS.GAME_UPDATE, { test: 'data' });
      
      expect(mockSocket1.emit.calledWith(EVENTS.GAME_UPDATE, { test: 'data' })).to.be.true;
      expect(mockSocket2.emit.calledWith(EVENTS.GAME_UPDATE, { test: 'data' })).to.be.true;
    });

    it('should broadcast to specific players', () => {
      gameRoom.broadcastToPlayers([mockSocket1.id], EVENTS.PLAYER_ACTION, { action: 'test' });
      
      expect(mockSocket1.emit.calledWith(EVENTS.PLAYER_ACTION, { action: 'test' })).to.be.true;
      expect(mockSocket2.emit.called).to.be.false;
    });

    it('should exclude specific players from broadcast', () => {
      gameRoom.broadcastExcept(mockSocket1.id, EVENTS.PLAYER_UPDATE, { update: 'test' });
      
      expect(mockSocket1.emit.called).to.be.false;
      expect(mockSocket2.emit.calledWith(EVENTS.PLAYER_UPDATE, { update: 'test' })).to.be.true;
    });
  });

  describe('State Synchronization', () => {
    beforeEach(() => {
      gameRoom.addPlayer(mockSocket1, 'Player 1');
      gameRoom.addPlayer(mockSocket2, 'Player 2');
      gameRoom.startGame();
    });

    it('should provide consistent state to all players', () => {
      const state1 = gameRoom.getStateForPlayer(mockSocket1.id);
      const state2 = gameRoom.getStateForPlayer(mockSocket2.id);
      
      // Core game state should be identical
      expect(state1.stage).to.equal(state2.stage);
      expect(state1.round).to.equal(state2.round);
      expect(state1.currentPlayerIndex).to.equal(state2.currentPlayerIndex);
    });

    it('should provide player-specific data', () => {
      const state1 = gameRoom.getStateForPlayer(mockSocket1.id);
      const state2 = gameRoom.getStateForPlayer(mockSocket2.id);
      
      expect(state1.playerId).to.equal(mockSocket1.id);
      expect(state2.playerId).to.equal(mockSocket2.id);
      expect(state1.playerId).to.not.equal(state2.playerId);
    });

    it('should filter sensitive information per player', () => {
      // Start gameplay to have cards dealt
      gameRoom.gameState.stage = GAME_STAGES.GAMEPLAY;
      gameRoom.gameState.dealCards(5);
      
      const state1 = gameRoom.getStateForPlayer(mockSocket1.id);
      const state2 = gameRoom.getStateForPlayer(mockSocket2.id);
      
      // Players should only see their own cards
      const player1Data = state1.players.find(p => p.id === mockSocket1.id);
      const player2Data = state1.players.find(p => p.id === mockSocket2.id);
      
      expect(player1Data.hand).to.be.an('array');
      expect(player2Data.hand).to.be.undefined; // Should not see other player's cards
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('should handle invalid player actions gracefully', () => {
      gameRoom.addPlayer(mockSocket1, 'Player 1');
      gameRoom.addPlayer(mockSocket2, 'Player 2');
      gameRoom.startGame();
      
      // Try to perform action with invalid player
      expect(() => {
        gameRoom.handlePlayerAction('invalid-id', ACTIONS.PLACE_BET, { amount: 100 });
      }).to.not.throw();
    });

    it('should handle actions in wrong game stage', () => {
      gameRoom.addPlayer(mockSocket1, 'Player 1');
      gameRoom.addPlayer(mockSocket2, 'Player 2');
      gameRoom.startGame();
      
      // Try to place bet during dealer selection
      expect(gameRoom.gameState.stage).to.equal(GAME_STAGES.DEALER_SELECTION);
      
      const result = gameRoom.handlePlayerAction(mockSocket1.id, ACTIONS.PLACE_BET, { amount: 100 });
      
      expect(result).to.be.false;
    });

    it('should maintain room integrity after errors', () => {
      gameRoom.addPlayer(mockSocket1, 'Player 1');
      gameRoom.addPlayer(mockSocket2, 'Player 2');
      gameRoom.startGame();
      
      const initialPlayerCount = gameRoom.players.length;
      const initialGameState = gameRoom.gameState.stage;
      
      // Cause various errors
      gameRoom.handlePlayerAction('invalid-id', 'invalid-action', {});
      gameRoom.removePlayer('invalid-id');
      
      // Room should maintain integrity
      expect(gameRoom.players).to.have.length(initialPlayerCount);
      expect(gameRoom.gameState.stage).to.equal(initialGameState);
    });

    it('should handle rapid player connections/disconnections', () => {
      // Simulate rapid join/leave
      gameRoom.addPlayer(mockSocket1, 'Player 1');
      gameRoom.removePlayer(mockSocket1.id);
      gameRoom.addPlayer(mockSocket1, 'Player 1');
      gameRoom.addPlayer(mockSocket2, 'Player 2');
      gameRoom.removePlayer(mockSocket1.id);
      gameRoom.addPlayer(mockSocket3, 'Player 3');
      
      expect(gameRoom.players).to.have.length(2);
      expect(gameRoom.players.find(p => p.id === mockSocket2.id)).to.exist;
      expect(gameRoom.players.find(p => p.id === mockSocket3.id)).to.exist;
    });
  });

  describe('Cleanup and Memory Management', () => {
    it('should clean up properly when room is destroyed', () => {
      gameRoom.addPlayer(mockSocket1, 'Player 1');
      gameRoom.addPlayer(mockSocket2, 'Player 2');
      gameRoom.startGame();
      
      gameRoom.destroy();
      
      expect(gameRoom.players).to.be.empty;
      expect(gameRoom.gameState).to.be.null;
      expect(gameRoom.isActive).to.be.false;
    });

    it('should handle timeout scenarios', () => {
      gameRoom.addPlayer(mockSocket1, 'Player 1');
      gameRoom.addPlayer(mockSocket2, 'Player 2');
      gameRoom.startGame();
      
      // Simulate timeout
      gameRoom.handleTimeout();
      
      // Room should handle timeout gracefully
      expect(gameRoom.isActive).to.be.false; // Might end game on timeout
    });
  });
});
