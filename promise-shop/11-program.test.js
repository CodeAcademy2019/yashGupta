let promiseAll= require('./11-program.js');

describe('promiseAll', ()=>{
    it('should resolve the promise with value "ABHINAV Ayushi"', ()=>{
        return expect(promiseAll).resolves.toEqual(["Abhinav", "Ayushi"])
    })
    it ('should not reject the promise', ()=>{
        return expect (promiseAll).rejects.toEqual('Something');
    })
})