let mid = require('./8-defaultArguments.js');

test ("This function should return midpoint of the 2 points passed as an argument",()=>{
    expect(mid()).toEqual(0.5);
})
test ("This function should return midpoint of the 2 points passed as an argument",()=>{
    expect(mid(1,undefined)).toEqual(1);
})
test ("This function should return midpoint of the 2 points passed as an argument",()=>{
    expect(mid(undefined,1)).toEqual(0.5);
})