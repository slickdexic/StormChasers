const { v4: uuidv4 } = require('uuid');

class Card {
    constructor(suit, rank) {
        this.id = uuidv4();
        this.suit = suit;
        this.rank = rank;
    }

    isSpecial() {
        return ['A', 'Q', '7'].includes(this.rank);
    }

    toString() {
        return `${this.rank} of ${this.suit}`;
    }
}

class Deck {
    constructor(numDecks = 1) {
        this.cards = [];
        this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        this.ranks = ['7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        
        for (let i = 0; i < numDecks; i++) {
            for (const suit of this.suits) {
                for (const rank of this.ranks) {
                    this.cards.push(new Card(suit, rank));
                }
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal(numCards) {
        return this.cards.splice(0, numCards);
    }

    draw(numCards = 1) {
        if (this.cards.length < numCards) {
            // In a real game, you might need to reshuffle the discard pile
            // For now, we'll just return what's left
            const remaining = [...this.cards];
            this.cards = [];
            return remaining;
        }
        return this.cards.splice(0, numCards);
    }

    isEmpty() {
        return this.cards.length === 0;
    }

    add(cards) {
        this.cards.push(...cards);
    }
}

module.exports = { Card, Deck };
