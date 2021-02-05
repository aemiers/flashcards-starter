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
    let gameCards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });

    let gameDeck = new Deck(gameCards);
    this.currentRound = new Round(gameDeck);

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