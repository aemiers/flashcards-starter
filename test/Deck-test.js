const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe ('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should have a default of zero cards', function() {
    const deck = new Deck();
    expect(deck.cardList.length).to.equal(0);
  });

  it('should be able to count the cards in the deck', function() {
    const card1 = new Card(1, 'How many Nazgul are there?', ['one', 'five', 'nine'], 'nine');
    const card2 = new Card(5, 'One does not simply...', ['get off the internet', 'walk into Mordor', 'sight-read a piece with six flats'], 'walk into Mordor');
    const card3 = new Card(19, 'How many meals are there?', [3, 5, 7], 7);
    const card4 = new Card(10, 'No admittance except...', ['on party business', 'if you speak friend', 'FOR FRODO!'], 'on party business');
    
    const deck = new Deck();

    deck.cardList.push(card1);
    deck.cardList.push(card2);
    deck.cardList.push(card3);
    deck.cardList.push(card4);

    expect(deck.countCardsInDeck()).to.equal(4);
  });

});
