let timedOut= require('./1-program.js');

jest.useFakeTimers();
describe('timedOut',()=>{
    it('testing if timedOut returns TIMED OUT!',()=>{
        timedOut();
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });
})