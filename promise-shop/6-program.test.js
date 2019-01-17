let func = require('./6-program.js');

describe('promise', ()=>{
    it('should fulfill the promise with a value SECRET VALUE', ()=>{
        return expect(func.promise).resolves.toEqual('SECRET VALUE');
    });
    it('should reject the promise with a value SECRET REJECTED VALUE',()=>{
       return expect(func.promise1).rejects.toEquale('SECRET REJECTED VALUE'); 
    });
});