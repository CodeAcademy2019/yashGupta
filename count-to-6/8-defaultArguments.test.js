let mid = require('./8-defaultArguments.js');

test ("This function should return midpoint of the 2 points passed as an argument",()=>{
    expect(mid()).toBe(0.5);
})
test ("This function should return midpoint of the 2 points passed as an argument",()=>{
    expect(mid(1,undefined)).toBe(1);
})
test ("This function should return midpoint of the 2 points passed as an argument",()=>{
    expect(mid(undefined,1)).toBe(0.5);
})