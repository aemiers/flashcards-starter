class Deck {
  constructor(card) {
    this.card = card;
  }

  countCardsInDeck() {
    return this.card.length;
  }
}

module.exports = Deck;