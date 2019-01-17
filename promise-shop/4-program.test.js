let func = require('./4-program.js');

describe('promise',()=>{
    it('should fulfull the promise with I FIRE', ()=>{
        expect.assertions(1);
        return expect(func.promise).resolves.toEqual('I FIRED');
    });
    it ('should reject the promise with I DID NOT FIRE',()=>{
        //expect.assertions(1);
        return expect(func.promise).rejects.toThrow('I DID NOT FIRE');
    })
});