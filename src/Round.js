const Card = require("./Card");
const Turn = require("./Turn");

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

  takeTurn(guess) {
    this.turnsCount ++; 
    const turn = new Turn(guess, this.returnCurrentCard());

    if (turn.evaluateGuess()) {
      this.correctGuesses ++;
    } else {
      this.incorrectGuesses ++;
    }
// /evaluates guesses, gives feedback, and stores ids of incorrect guesses
// //  When a guess is made, a new Turn instance is created.
// //  The turns count is updated, regardless of whether the guess is correct or incorrect
// //  The next card becomes current card
// //  Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// //  Feedback is returned regarding whether the guess is incorrect or correct
  }

//   calculatePercentCorrect() {
//     const percent = number correct/ total number;
//     return percent;
//   }

//   endround() {
//     console.log(`** Round over! ** You answered ${insert data here} of the questions correctly!`);
//  }
}

module.exports = Round;