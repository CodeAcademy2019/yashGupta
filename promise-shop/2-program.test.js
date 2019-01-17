let promise1 = require('./2-program.js');

//jest.useFakeTimers();

describe('promise', function(){
    it('testing if promise is fulfilled.', ()=>{
        //expect.assertions(0);
         return (expect(promise1.promise).resolves.toEqual("FULFILLED!"));
    })
})

// describe('promise', function(){
//     it('testing if promise is resolved after min 300ms', ()=>{
//         promise1.funcPromise()
//         expect(setTimeout).toHaveBeenCalledTimes(1);
//         expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
//     });
// })