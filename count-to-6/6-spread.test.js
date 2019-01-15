let spread = require('./6-spread.js');

test("The function spread should return the minimum value in the array",()=>{
    expect(spread([18,5,7,24])).toEqual(5)
});

test("The function spread should return the minimum value in the array",()=>{
    expect(spread([0])).toEqual(0)
});
test("The function spread should not return the maximum in the array",()=>{
    expect(spread([-100,-200])).not.toEqual(-100)
});