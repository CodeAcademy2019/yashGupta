const promise = Promise.resolve("SECRET VALUE");

promise.then(console.log);

const promise1=Promise.reject("SECRET REJECTED VALUE");

promise.then(null, console.log);

promise1.catch(console.log);

module.exports={promise, promise1}