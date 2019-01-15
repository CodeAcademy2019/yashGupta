let midpoint = require('./8-defaultArguments.js');

test (`The function "mid" should return 0.5 when no arguments are passed.(By default lowerBound =0, upperbound=1)`,()=>{
    expect(midpoint()).toEqual(0.5);
})
test (`The function "mid" should return midpoint of the 2 points passed as an argument (If any one argument is not defined, function should take the default value)`,()=>{
    expect(midpoint(1,undefined)).toEqual(1);
})
test (`The function "mid" should return midpoint of the 2 points passed as an argument`,()=>{
    expect(midpoint(-1,1)).toEqual(0);
})