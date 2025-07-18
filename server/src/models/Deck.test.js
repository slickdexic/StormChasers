const { Deck, Card } = require('./Deck');

describe('Deck', () => {
    it('should create a standard 32-card deck', () => {
        const deck = new Deck();
        expect(deck.cards.length).toBe(32);
    });

    it('should create a double deck with 64 cards', () => {
        const deck = new Deck(2);
        expect(deck.cards.length).toBe(64);
    });

    it('should have unique card IDs', () => {
        const deck = new Deck(2);
        const ids = deck.cards.map(c => c.id);
        const uniqueIds = new Set(ids);
        expect(ids.length).toBe(uniqueIds.size);
    });

    it('should shuffle the deck', () => {
        const deck1 = new Deck();
        const deck2 = new Deck();
        deck2.shuffle();
        // It's technically possible for a shuffled deck to be the same as an unshuffled one,
        // but highly improbable. A simple string comparison is a decent check.
        expect(JSON.stringify(deck1.cards)).not.toEqual(JSON.stringify(deck2.cards));
    });

    it('should deal a specified number of cards', () => {
        const deck = new Deck();
        const hand = deck.deal(5);
        expect(hand.length).toBe(5);
        expect(deck.cards.length).toBe(27);
    });

    it('should draw a single card', () => {
        const deck = new Deck();
        const card = deck.draw(1);
        expect(card.length).toBe(1);
        expect(deck.cards.length).toBe(31);
    });

    it('should not crash when drawing from an empty deck', () => {
        const deck = new Deck();
        deck.deal(32); // Empty the deck
        expect(deck.isEmpty()).toBe(true);
        const card = deck.draw(1);
        expect(card.length).toBe(0);
    });
});

describe('Card', () => {
    it('should identify special cards', () => {
        const ace = new Card('spades', 'A');
        const queen = new Card('hearts', 'Q');
        const seven = new Card('clubs', '7');
        const eight = new Card('diamonds', '8');

        expect(ace.isSpecial()).toBe(true);
        expect(queen.isSpecial()).toBe(true);
        expect(seven.isSpecial()).toBe(true);
        expect(eight.isSpecial()).toBe(false);
    });

    it('should have a string representation', () => {
        const card = new Card('spades', 'K');
        expect(card.toString()).toBe('K of spades');
    });
});
