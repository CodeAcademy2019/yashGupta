const funcPromise= (fulfill, reject) =>{
    setTimeout(() => {
        reject(new Error('REJECTED!'));
    }, 300);
}
const promise = new Promise(funcPromise);

function onReject (Error) {
    console.log(Error.message);
  }
promise.then(null,onReject);
  
  module.exports={funcPromise, promise};