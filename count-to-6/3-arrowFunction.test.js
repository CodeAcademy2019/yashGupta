let arrowFunction = require('./3-arrowFunction.js');

test('The output should return the first character of each element in the array', () =>{
    expect (arrowFunction(["Hello", "arrow", "functions"])).toBe(`[Hello,arrow,functions] becomes "Haf"`);
});

test('The output should return the first character of each element in the array', () =>{
    expect (arrowFunction(["Hello"])).toBe(`[Hello] becomes "H"`);
});

test('The output should return the first character of each element in the array', () =>{
    expect (arrowFunction(["Hello"])).not.toBe(`[Hello] becomes "A"`);
});