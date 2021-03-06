const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.card[0];
    this.turnsCount = 0;
    this.correctGuesses = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.turnsCount ++; 

    if (turn.evaluateGuess()) {
      this.correctGuesses ++;
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.currentCard = this.deck.card[this.turnsCount];
    return turn.answerFeedback();
  }

  calculatePercentCorrect() {
    let percent = Math.round(this.correctGuesses / this.turnsCount * 100)
    return percent;
  }

  endRound() {
    const endQuote = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    console.log(endQuote);
    return endQuote;
 }
}

module.exports = Round;