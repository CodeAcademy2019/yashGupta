let HelloES6=require('./1-program.js')

test ('running this function should print Hello ES6', () => {
    expect(HelloES6()).toBe('HELLO ES6');
});