const { CLIEngine } = require('eslint');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound;
  }

  beginGame() {
    const gameCards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));

    let gameDeck = new Deck(gameCards);

    console.log(gameDeck)
    let currentRound = new Round(gameCards);

    console.log(currentRound)
    this.printMessage(gameDeck);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCardsInDeck()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;