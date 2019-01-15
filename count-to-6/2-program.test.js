let templateString=require('./2-stringTemplate.js');

test(`The output of the function templateString should be Hello, "Name!" Your name lowercased is "name"`, () => {
    expect (templateString("Yash")).toEqual(`Hello, Yash!
    Your name lowercased is yash.`)
});

test(`The output of the function templateString should be Hello, "NAME!" Your name lowercased is "name"`, () => {
    expect (templateString("YASH")).toEqual(`Hello, YASH!
    Your name lowercased is yash.`)
});

test(`The output of the function should not be Hello, "Anything other than the argument" Your name lowercased is "Anything other than the argument"`, () => {
    expect (templateString("Ayushi")).not.toEqual(`Hello, Yash!
    Your name lowercased is yash.`)
});