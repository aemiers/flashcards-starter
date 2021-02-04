class Turn {
  constructor (guess, currentCard) {
    this.guess = guess;
    this.currentCard = currentCard;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    // console.log('guess', this.guess);
    // console.log('correct answer', this.currentCard.correctAnswer)
    return this.guess === this.currentCard.correctAnswer ? true : false;
  }

  answerFeedback() {
    return this.evaluateGuess() ? 'Correct Answer!' : 'Close, but no cigar!';
  }
}

module.exports = Turn;