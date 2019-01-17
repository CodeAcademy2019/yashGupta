const promiseReturnPromise = require('./7-program.js');

describe('promise',()=>{
    it ('should return FULFILLED SUCCESSFULLY', ()=>{
        return (expect(promiseReturnPromise.a).resolves.toEqual('Fulfilled Successfully!'));
    });
    it ('should return FULFILLED SUCCESSFULLY! This one is from second function',()=>{
        return (expect(promiseReturnPromise.b).resolves.toEqual('Fulfilled Successfully! This one is from second function'));
    })
})