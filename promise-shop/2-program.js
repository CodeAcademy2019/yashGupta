const funcPromise= (fulfill, reject) =>{
    setTimeout(() => {
        fulfill("FULFILLED!")
    }, 300);}
    //console.log('1');
const promise = new Promise(funcPromise)
  promise.then((success)=>{
      console.log(success);
  })
  module.exports={promise,funcPromise}