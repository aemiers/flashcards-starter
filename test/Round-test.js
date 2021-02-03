const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
// const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe ('Round', function() {
  let card1, card2, card3, card4, deck, round;

  beforeEach(function() {
    card1 = new Card(1, 'How many Nazgul are there?', ['one', 'five', 'nine'], 'nine');
    card2 = new Card(5, 'One does not simply...', ['get off the internet', 'walk into Mordor', 'sight-read a piece with six flats'], 'walk into Mordor');
    card3 = new Card(19, 'How many meals are there?', [3, 5, 7], 7);
    card4 = new Card(10, 'No admittance except...', ['on party business', 'if you speak friend', 'FOR FRODO!'], 'on party business');
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

  it('should know what the current card is', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  // it('should update the turns count', function() {
  //   round.takeTurn('guess');
  //   round.takeTurn('guess');
  //   round.takeTurn('guess');

  //   expect(round.turnsCount).to.deep.equal(3);
  // });








  //   it('should add a tally to the correct guess counter when the question is answered correctly', function() {
  //     const card1 = new Card(1, 'How many Nazgul are there?', ['one', 'five', 'nine'], 'nine');
  //     const turn = new Turn('nine', card1);
  //     const deck = new Deck();
  //     const round = new Round(card1);

  //     turn.evaluateGuess();
  //     round.takeTurn();

  //   // expect(round.turnsCount).to.deep.equal(1);
  //   expect(round.correctGuesses).to.deep.equal(1);
  // });
});

  
    // const deck = new Deck();

    // deck.cardList.unshift(card1);
    // deck.cardList.unshift(card2);
    // deck.cardList.unshift(card3);
    // deck.cardList.unshift(card4);