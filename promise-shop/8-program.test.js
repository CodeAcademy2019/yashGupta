const promise = require('./8-program.js');

describe('promise', ()=>{
    it ('should resolve and return title attached to the argument', ()=>{
        return expect(promise).resolves.toEqual('DR. MANHATTAN');
    });
});