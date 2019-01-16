let exclaimation = require('./9-defaultArguments.js');

test (`The function "exclaimation" should return string followed by exclaimation marks equal to the length of the string if not specified`, ()=> {
    expect (exclaimation("Hi")).toEqual("Hi!!")
})

test (`The function "exclaimation" should return string followed by exclaimation marks equal to the length of the string if not specified`, ()=> {
    expect (exclaimation("Hi", 5)).toEqual("Hi!!!!!")
})

test (`The function "exclaimation" should return string followed by exclaimation marks equal to the length of the string if not specified`, ()=> {
    expect (exclaimation("Hii", null)).toEqual("Hii!!!")
})
