let templateString=require('./2-program.js');

test("The output should be Hello, name! Your name lowercased is name", () => {
    expect (templateString("Yash")).toBe(`Hello, Yash!
    Your name lowercased is yash.`)
})