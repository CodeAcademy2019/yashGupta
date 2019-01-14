let rest = require('./7-rest.js');
//import { , , } from ('./7-rest.js');
test("This function should return the average of the array",() =>{
    expect (rest(1,2,3)).toBe(2);
})

test("This function should return the average of the array",() =>{
    expect (rest(0)).toBe(0);
})

test("This function should return the average of the array",() =>{
    expect (rest(100,-100)).toBe(0);
})