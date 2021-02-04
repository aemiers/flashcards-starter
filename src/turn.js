class Turn {
  constructor (guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.guess === this.card.correctAnswer ? true : false;
  }

  answerFeedback() {
    return this.evaluateGuess() ? 'Correct Answer!' : 'Close, but no cigar!';
  }
}

module.exports = Turn;