let promiseCatch = require('./10-program.js');

describe('iterate()', ()=>{
    it ('should return integer incremented by 1', ()=>{
        expect(promiseCatch.iterate(1)).toEqual(2);
    })
})

describe('promise Catch', ()=>{
    it ('should catch error', ()=>{
        return promiseCatch.promise.catch(promiseError =>{
            return expect(promiseError).toEqual('OH NOES')
        })
    })
})