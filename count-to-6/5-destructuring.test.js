let destructuring= require('./5-destructuring.js');

test(`The function "destructuring" should return username and email of the userArray (argument array)`,()=>{
    expect(destructuring([1, "jdoe", "jdoe@example.com", "John", "Doe"])).toEqual({username: "jdoe", email: "jdoe@example.com"});
});

test(`The function "destructuring" should not return username and email of any other user (argument array)`,()=>{
    expect(destructuring([, "gyash", "gyash@example.com", "Yash", "Gupta"])).not.toEqual({username: "jdoe", email: "gyash@example.com"});
});
