const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
  let card;

  beforeEach(function() {
    card = new Card(1, 'How many Nazgul are there?', ['one', 'five', 'nine'], 'nine');
  });
  
  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    card = new Card();
    
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    expect(card.question).to.equal('How many Nazgul are there?');
  });  

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['one', 'five', 'nine']);
  });  

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('nine');
  });
});