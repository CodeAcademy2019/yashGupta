let func = require('./5-program.js');

describe('promise', ()=>{
    it('should resolve the promise and printing PROMISE VALUE', ()=>{
       return expect(func.promise).resolves.toEqual('PROMISE VALUE'); 
    });
})