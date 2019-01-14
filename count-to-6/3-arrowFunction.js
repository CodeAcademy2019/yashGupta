// var inputs = process.argv.slice(2);
//     var result = inputs.map(input=>input.charAt(0))
//                         .reduce((input1, input2)=> input1+input2);
// console.log(`[${inputs}] becomes "${result}"`);

function arrowFunction(array){
    var inputs = array;
    var result = inputs.map(input=>input.charAt(0))
                        .reduce((input1, input2)=> input1+input2);
    return(`[${array}] becomes "${result}"`);
}
module.exports=arrowFunction;