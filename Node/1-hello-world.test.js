let helloWorld = require('./1-hello-world.js');

describe('hello world', ()=>{
    it('should print "HELLO WORLD in the console"', () => {
        expect(helloWorld()).toEqual('HELLO WORLD');
    })
})