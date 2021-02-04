const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  // it('should make a deck at the beginning of the game', function() {
  //   game.beginGame();

  //   expect(game.beginGame()).to.be.an.instanceOf(Deck);
  // })

  // it('should keep track of the current round', function() {
  //   game = new Game(1)
    
  //   expect(game.currentRound).to.be.an.instanceOf(Round);
  // });

});