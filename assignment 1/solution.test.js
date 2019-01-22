const bowl = require('./solution.js');

describe('roll', () => {
  it('should calculate the score for each throw', () => {
    expect(bowl.roll([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toEqual(90);
  });

  it('can take array of length more than 20 (when strike appears in 10th frame)', () => {
    expect(bowl.roll([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toEqual(30);
  });

  it('should return 0 when every roll has a zero pin knocked out.', () => {
    expect(bowl.roll([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(0);
  });

  it('should return', () => {
    expect(bowl.roll([0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(30);
  });

  it('should return the max score one can reach in 12 strikes in a row', () => {
    expect(bowl.roll([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toEqual(300);
  });

  it('should', () => {
    expect(bowl.roll([10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 10])).toEqual(120);
  });

  it('should check for spare ', () => {
    expect(bowl.roll([4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 10])).toEqual(146);
  });

  // xit ('should return ')
});

describe('score', () => {
  it('should return the total score of the game', () => {
    expect(bowl.score([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(16);
  });
  it('should return "Game Quit" if enough inputs are not provided', () => {
    expect(bowl.score([1, 2])).toEqual('Game Quit.');
  });
});
