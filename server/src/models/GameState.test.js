const GameState = require('./GameState');

describe('GameState', () => {
    let playerIds;
    let gameState;

    beforeEach(() => {
        playerIds = ['p1', 'p2', 'p3', 'p4'];
        gameState = new GameState(playerIds);
    });

    it('should initialize with correct defaults', () => {
        expect(gameState.currentStage).toBe('lobby');
        expect(gameState.playerIds).toEqual(playerIds);
        expect(gameState.trackPositions.size).toBe(4);
    });

    it('should add and remove players correctly', () => {
        gameState.addPlayer('p5');
        expect(gameState.playerIds).toContain('p5');
        expect(gameState.trackPositions.has('p5')).toBe(true);

        gameState.removePlayer('p1');
        expect(gameState.playerIds).not.toContain('p1');
        expect(gameState.trackPositions.has('p1')).toBe(false);
    });

    it('should advance to the next player', () => {
        gameState.setActivePlayer('p1');
        gameState.advanceToNextPlayer();
        expect(gameState.activePlayerId).toBe('p2');
        gameState.advanceToNextPlayer();
        gameState.advanceToNextPlayer();
        gameState.advanceToNextPlayer();
        expect(gameState.activePlayerId).toBe('p1');
    });

    it('should correctly identify playable cards', () => {
        gameState.discardPile = [{ rank: '8', suit: 'hearts' }];
        
        // Matching suit
        expect(gameState.isPlayable({ rank: '9', suit: 'hearts' })).toBe(true);
        // Matching rank
        expect(gameState.isPlayable({ rank: '8', suit: 'clubs' })).toBe(true);
        // Not matching
        expect(gameState.isPlayable({ rank: '9', suit: 'clubs' })).toBe(false);
        // Queen is always playable (if not toxic 7)
        expect(gameState.isPlayable({ rank: 'Q', suit: 'spades' })).toBe(true);
    });

    it('should handle toxic 7 rules for playable cards', () => {
        gameState.discardPile = [{ rank: 'K', suit: 'hearts' }];
        gameState.playCard({ rank: '7', suit: 'clubs' }); // Start toxic
        
        expect(gameState.toxicSevenCount).toBe(1);
        expect(gameState.isPlayable({ rank: '8', suit: 'clubs' })).toBe(false);
        expect(gameState.isPlayable({ rank: 'Q', suit: 'spades' })).toBe(false);
        expect(gameState.isPlayable({ rank: '7', suit: 'hearts' })).toBe(true);
    });

    it('should advance stages correctly', () => {
        gameState.currentStage = 'dealer-selection';
        gameState.advanceToNextStage();
        expect(gameState.currentStage).toBe('storm');

        // Simulate storm round completion
        gameState.stormFinishOrder = playerIds;
        gameState.advanceToNextStage();
        expect(gameState.stormRound).toBe(1);
        expect(gameState.currentStage).toBe('lane-selection');

        gameState.currentStage = 'storm';
        gameState.advanceToNextStage();
        expect(gameState.stormRound).toBe(2);
        expect(gameState.currentStage).toBe('coin');
    });
});
