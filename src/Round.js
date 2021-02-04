const Card = require("./Card");
const Turn = require("./Turn");
const Deck = require("./Deck");


class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
    this.turnsCount = 0;
    this.correctGuesses = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard = this.deck.cardList[0];
  }

  takeTurn(guess, card) {
    let turn = new Turn(guess, this.returnCurrentCard());
    this.turnsCount ++; 

    if (turn.evaluateGuess()) {
      this.correctGuesses ++;
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.deck.cardList.shift();
    return turn.answerFeedback();
  }

  calculatePercentCorrect() {
    let percent = Math.round(this.correctGuesses / this.turnsCount * 100)
    return percent;
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
 }
}

module.exports = Round;