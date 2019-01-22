const bowl = require('./solution.js');

describe('roll', () => {
  it ('should calculate the score for each throw' , () => {
    expect(bowl.roll([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toEqual(90);
  })

  it ('can take array of length more than 20 (when strike appears in 10th frame)' , () => {
    expect(bowl.roll([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toEqual(30);
  })

  it ('should return 0 when every roll has a zero pin knocked out.' , () => {
    expect (bowl.roll([ 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ])).toEqual(30);
  })

  // xit ('should return ')
})