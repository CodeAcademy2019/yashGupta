let exclaimation = require('./9-defaultArguments.js');

test ("This should return string followed by exclaimation marks equal to the length of the string if not specified", ()=> {
    expect (exclaimation("Hi")).toEqual("Hi!!")
})

test ("This should return string followed by exclaimation marks equal to the length of the string if not specified", ()=> {
    expect (exclaimation("Hi", 5)).toEqual("Hi!!!!!")
})

test ("This should return string followed by exclaimation marks equal to the length of the string if not specified", ()=> {
    expect (exclaimation("Hii", 3)).toEqual("Hii!!!")
})
