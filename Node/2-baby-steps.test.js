let sum = require('./2-baby-steps.js')

describe('sum', ()=>{
    it ('should take inputs from the cmd line and output the sum',()=>{
        process.argv=["node", "2-babysteps.js", "1", "2", "3", "4"];
        expect(sum()).toEqual(10);

    })
})