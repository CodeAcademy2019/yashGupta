const bowl = require('./solution.js');

describe('roll', () => {
  it ('should calculate the score for each throw' , () => {
    expect(bowl.roll([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toEqual(90);
  })
})