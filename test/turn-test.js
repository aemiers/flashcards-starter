const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe ('Turn', function() {
  let card, turn;

  beforeEach(function() {
    card = new Card(1, 'How many Nazgul are there?', ['one', 'five', 'nine'], 'nine');
    turn = new Turn('nine', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to store a user\'s guess', function() {
    expect(turn.guess).to.deep.equal('nine');
  });

  it('should be able to store the card object', function() {
    expect(turn.currentCard).to.deep.equal(card);
  });

  it('should be able to return the guess', function() {
    expect(turn.returnGuess()).to.equal('nine');
  });

  it('should be able to return the current card', function() {
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should be able to verify if the guess is correct', function() {
    expect(turn.evaluateGuess()).to.deep.equal(true);
  });

  it('should be able to verify if the guess is incorrect', function() {
    turn = new Turn('one', card);
    expect(turn.evaluateGuess()).to.deep.equal(false);
  });

  it('should tell the user if the guess is correct', function() {
    expect(turn.answerFeedback()).to.deep.equal('Correct Answer!');
  });

  it('should tell the user if the guess is incorrect', function() {
    turn = new Turn('one', card);
    expect(turn.answerFeedback()).to.deep.equal('Close, but no cigar!');
  });
});

