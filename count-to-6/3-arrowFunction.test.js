let arrowFunction = require('./3-arrowFunction.js');

test('The output of the arrowFunction should return the first character of each element in the array', () =>{
    expect (arrowFunction(["Hello", "arrow", "functions"])).toEqual(`[Hello,arrow,functions] becomes "Haf"`);
});

test('The output of the arrowFunction should return the first character of each element in the array', () =>{
    expect (arrowFunction(["Hello"])).toEqual(`[Hello] becomes "H"`);
});

test(`The output of arrowFunction should not return the lowercase if the first letter is in uppercase and vice versa.`, () =>{
    expect (arrowFunction(["Hello"])).not.toEqual(`[Hello] becomes "h"`);
});