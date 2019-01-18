//For testing creating two function 
const getPromise1=()=>new Promise((resolve, reject) => resolve('Abhinav'));
const getPromise2=()=>new Promise((resolve, reject)=> resolve('Ayushi'));

const all = (promise1, promise2) =>{
    let counter =0;
    let arr=[];
    const internalPromise= new Promise (function (resolve, reject){

    
    promise1.then((x)=>{
        arr[0]=x;
        counter++;
    
        if(counter>=2){
            resolve(arr);
        }
    });

    promise2.then((x)=>{
            arr[1]=x;
        counter++;
    
        if(counter>=2){
            resolve(arr);
        }});
    
    })
    return internalPromise;
}
const storePromise= all(getPromise1(),getPromise2()).then((arg)=>{
    return arg
});
module.exports=storePromise