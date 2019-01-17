let func = require('./3-program.js');

//jest.useFakeTimers();
describe('funcPromise',function(){
    it('should reject the promise', ()=>{
        expect.assertions(1);
        return expect(func.promise).rejects.toThrow('REJECTED!');
    });
})