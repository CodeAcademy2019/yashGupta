const attachTitle = (firstArgument) =>{
    return `DR. ${firstArgument}`
}

// const promise=new Promise((fulfilled, reject) =>{
//     fulfilled('MANHATTAN');
// })

// promise.then(arg=>{
//     console.log(attachTitle(arg));
// })

const promise= Promise.resolve('MANHATTAN').then(attachTitle).then((arg)=>{return arg});

module.exports=promise;