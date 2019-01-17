const first=()=>{
    return Promise.resolve('Fulfilled Successfully!');
}
const second=(argument)=>{
    return Promise.resolve(argument+' This one is from second function');
}
const a = first();
//console.log(a);

const b=a.then((onResolveArgument) =>{
    c=second(onResolveArgument);
    return c;
    
})
b.then(console.log)

// const b= second(a);
// return b;

module.exports={a,b}