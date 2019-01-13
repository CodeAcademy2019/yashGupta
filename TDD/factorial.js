function factorial(a){
    if (a<0) return;
    if (a===1){
        return 1;
    }
    else{
    return a * (factorial(a-1));
    }
}
module.exports=factorial;