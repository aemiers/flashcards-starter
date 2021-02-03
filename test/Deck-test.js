const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe ('Deck', function() {
  let deck;

  beforeEach(function() {
    deck = new Deck()
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be able to count the cards in the deck', function() {
    const card1 = new Card(1, 'How many Nazgul are there?', ['one', 'five', 'nine'], 'nine');
    const card2 = new Card(5, 'One does not simply...', ['get off the internet', 'walk into Mordor', 'sight-read a piece with six flats'], 'walk into Mordor');
    const card3 = new Card(19, 'How many meals are there?', [3, 5, 7], 7);
    const card4 = new Card(10, 'No admittance except...', ['on party business', 'if you speak friend', 'FOR FRODO!'], 'on party business');
    
    deck = new Deck([card1, card2, card3, card4]);

    expect(deck.countCardsInDeck()).to.equal(4);
  });
});
