// var numbers = process.argv.slice(2);
//     var min = Math.min(...numbers);
// console.log(`The minimum of [${numbers}] is ${min}`);
var spread = (arrayOfNumbers) =>{
    var min=Math.min(...arrayOfNumbers);
    return( min);
}
module.exports=spread;