const GameRoom = require('./GameRoom');
const Player = require('./Player');

describe('GameRoom', () => {
    let gameRoom;
    let host;
    let player2;

    beforeEach(() => {
        host = new Player('host-id', 'Host');
        player2 = new Player('p2-id', 'Player2');
        gameRoom = new GameRoom('room1', 'Test Room', host, { decks: 1, cardsPerHand: 5 });
        gameRoom.addPlayer(player2);
    });

    it('should create a room with a host', () => {
        expect(gameRoom.host.id).toBe('host-id');
        expect(gameRoom.players.length).toBe(2);
    });

    it('should start the game and enter dealer selection', () => {
        gameRoom.startGame();
        expect(gameRoom.gameState.currentStage).toBe('dealer-selection');
        expect(gameRoom.gameState.dealerSelectionCards.length).toBe(18);
    });

    it('should handle dealer selection and tie-breaking', () => {
        gameRoom.startGame();
        
        // Force a tie
        const card7 = { rank: '7', suit: 'hearts', isFlipped: false };
        gameRoom.gameState.dealerSelectionCards[0] = card7;
        gameRoom.gameState.dealerSelectionCards[1] = card7;

        gameRoom.selectDealerCard('host-id', 0);
        const result = gameRoom.selectDealerCard('p2-id', 1);

        expect(result.tie).toBe(true);
        expect(result.tiedPlayers).toEqual(['host-id', 'p2-id']);
        expect(host.hasSelectedDealerCard).toBe(false); // Reset for tie-break
    });

    it('should deal cards and start a storm round', () => {
        gameRoom.dealCardsAndStartStorm();
        expect(host.cards.length).toBe(5);
        expect(player2.cards.length).toBe(5);
        expect(gameRoom.gameState.discardPile.length).toBe(1);
        expect(gameRoom.gameState.stockPile.cards.length).toBe(32 - 10 - 1);
    });

    it('should allow a valid card play', () => {
        gameRoom.gameState.currentStage = 'storm';
        gameRoom.dealCardsAndStartStorm();
        
        const topCard = gameRoom.gameState.getTopDiscard();
        const playableCard = host.cards.find(c => c.suit === topCard.suit || c.rank === topCard.rank || c.rank === 'Q');
        
        if (playableCard) {
            gameRoom.gameState.setActivePlayer('host-id');
            const result = gameRoom.playCard('host-id', playableCard.id, null);
            expect(result.success).toBe(true);
            expect(gameRoom.gameState.getTopDiscard().id).toBe(playableCard.id);
        } else {
            // This might happen by chance, but is unlikely.
            console.warn('No playable card found for host in test.');
        }
    });

    it('should handle drawing cards', () => {
        gameRoom.gameState.currentStage = 'storm';
        gameRoom.dealCardsAndStartStorm();
        gameRoom.gameState.setActivePlayer('host-id');

        const initialCardCount = host.cards.length;
        const result = gameRoom.drawCards('host-id');
        expect(result.success).toBe(true);
        expect(host.cards.length).toBe(initialCardCount + 1);
        expect(gameRoom.gameState.activePlayerId).toBe('p2-id'); // Turn should advance
    });
});
