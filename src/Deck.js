class Deck {
  constructor() {
    this.cardList = [];
  }

  countCardsInDeck() {
    return this.cardList.length;
  }
}

module.exports = Deck;