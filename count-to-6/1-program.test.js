let HelloES6=require('./1-program.js')

test ('HelloES6 function should print Hello ES6', () => {
    expect(HelloES6()).toEqual('HELLO ES6');
});

test ('HelloES6 function should not print anything other than Hello ES6', () => {
    expect(HelloES6()).not.toEqual('HELLO');
});