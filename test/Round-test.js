const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe ('Round', function() {
  let card1, card2, card3, card4, deck, round;

  beforeEach(function() {
    card1 = new Card(1, 'How many Nazgul are there?', ['one', 'five', 'nine'], 'nine');
    card2 = new Card(2, 'One does not simply...', ['get off the internet', 'walk into Mordor', 'sight-read a piece with six flats'], 'walk into Mordor');
    card3 = new Card(3, 'How many meals are there?', [3, 5, 7], 7);
    card4 = new Card(4, 'No admittance except...', ['on party business', 'if you speak friend', 'FOR FRODO!'], 'on party business');
    deck = new Deck([card1, card2, card3, card4]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should start off with 0 correct guesses', function() {
    expect(round.correctGuesses).to.deep.equal(0);
  });

  it('should start off with no incorrect guesses', function() {
    expect(round.incorrectGuesses.length).to.deep.equal(0);
  });

  it('should have a counter for turns that starts at 0', function() {
    expect(round.turnsCount).to.deep.equal(0);
  });

  it('should update the turns count', function() {
    round.takeTurn('guess');
    round.takeTurn('guess');
    round.takeTurn('guess');

    expect(round.turnsCount).to.deep.equal(3);
  });

  it('should know what the current card is', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should know what the current card is when another turn is taken', function() {
    round.takeTurn('nine');
    round.returnCurrentCard()
    
    expect(round.returnCurrentCard()).to.deep.equal(card2);
  });

  it('should give feedback if the answer is correct', function() {
    expect(round.takeTurn('nine')).to.equal('CORRECT!');
  });

  it('should give feedback if the answer is incorrect', function() {
    expect(round.takeTurn('one')).to.deep.equal('CLOSE, BUT NO CIGAR!');
  });

  it('should store the card in incorrect guesses array if it was answered incorrectly', function() {
    round.takeTurn('one');

    expect(round.incorrectGuesses[0]).to.equal(1);
  });

  it('should update the current card when there is a new turn', function() {
    round.takeTurn('nine');
    expect(round.returnCurrentCard()).to.deep.equal(card2);

    round.takeTurn('walk into Mordor');
    expect(round.returnCurrentCard()).to.deep.equal(card3);
  });

  it('should calculate the percentage of questions answered correctly', function() {
    round.takeTurn('nine');
    round.takeTurn('walk into Mordor');
    round.takeTurn(5);
    expect(round.calculatePercentCorrect()).to.deep.equal(67);

    round.takeTurn('on party business');
    expect(round.calculatePercentCorrect()).to.deep.equal(75);
  })

  it('should return a message at the end of the round with the correct percentage', function() {
    round.takeTurn('nine');
    round.takeTurn('walk into Mordor');
    round.takeTurn(5);
    round.endRound();
    
    expect(round.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!');
  })

});