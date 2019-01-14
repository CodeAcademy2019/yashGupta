let destructuring= require('./5-destructuring.js');

test("This function should return username and email of the user",()=>{
    expect(destructuring([1, "jdoe", "jdoe@example.com", "John", "Doe"])).toEqual({username: "jdoe", email: "jdoe@example.com"});
});

test("This function should return username and email of the user",()=>{
    expect(destructuring([, "gyash", "gyash@example.com", "Yash", "Gupta"])).toEqual({username: "gyash", email: "gyash@example.com"});
});
