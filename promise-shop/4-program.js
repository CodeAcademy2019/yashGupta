let promise= new Promise(function(fulfill, reject){
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'))
})

let onRejected = (error) =>{
    console.log(error.message);
}
promise.then((success)=>{
    console.log(success)
}, onRejected);
module.exports={promise}