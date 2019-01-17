let promise = new Promise(function (fulfill, reject){
    fulfill('PROMISE VALUE');
})

promise.then((success) =>{
    console.log(success);
});
console.log("MAIN PROGRAM");

module.exports={promise}