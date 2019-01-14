let templateString=require('./2-stringTemplate.js');

test("The output should be Hello, name! Your name lowercased is name", () => {
    expect (templateString("Yash")).toBe(`Hello, Yash!
    Your name lowercased is yash.`)
});

test("The output should be Hello, name! Your name lowercased is name", () => {
    expect (templateString("YASH")).toBe(`Hello, YASH!
    Your name lowercased is yash.`)
});

test("The output should be Hello, name! Your name lowercased is name", () => {
    expect (templateString("Ayushi")).not.toBe(`Hello, Yash!
    Your name lowercased is yash.`)
});