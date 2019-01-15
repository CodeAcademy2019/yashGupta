let rest = require('./7-rest.js');
//import { , , } from ('./7-rest.js');
test(`The function "rest" should return the average of the "array(argument)"`,() =>{
    expect (rest(1,2,3)).toEqual(2);
})

test(`The function "rest" should return NaN/undefined if no argument is passed`,() =>{
    expect (rest()).toEqual(NaN);
})

test(`The function "rest" should return the average of the "array(argument)"`,() =>{
    expect (rest(100,-100)).toEqual(0);
})