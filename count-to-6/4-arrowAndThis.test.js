let foot= require('./4-arrowAndThis.js');

test("The output of this function should be Ouch!",() =>{
    expect(foot.kick()).toEqual("Ouch!");
})