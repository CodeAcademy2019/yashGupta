let spread = require('./6-spread.js');

test("This function should return the minimum in the array",()=>{
    expect(spread([18,5,7,24])).toEqual(5)
});

test("This function should return the minimum in the array",()=>{
    expect(spread([0])).toEqual(0)
});
test("This function should return the minimum in the array",()=>{
    expect(spread([-100,-200])).toEqual(-200)
});