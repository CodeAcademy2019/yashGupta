let rest = require('./7-rest.js');
//import { , , } from ('./7-rest.js');
test("This function should return the average of the array",() =>{
    expect (rest(1,2,3)).toEqual(2);
})

test("This function should return the average of the array",() =>{
    expect (rest(0)).toEqual(0);
})

test("This function should return the average of the array",() =>{
    expect (rest(100,-100)).toEqual(0);
})