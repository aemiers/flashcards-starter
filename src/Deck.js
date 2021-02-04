class Deck {
  constructor(cards) {
    this.cardList = cards;
  }

  countCardsInDeck() {
    return this.cardList.length;
  }
}

module.exports = Deck;