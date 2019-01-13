const factorial = require('./factorial.js');

test('factorial of 2 gives 2', function(){
    expect(factorial(2)).toBe(2);
})