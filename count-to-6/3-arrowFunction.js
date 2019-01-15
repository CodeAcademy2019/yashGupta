// var inputs = process.argv.slice(2);
//     var result = inputs.map(input=>input.charAt(0))
//                         .reduce((input1, input2)=> input1+input2);
// console.log(`[${inputs}] becomes "${result}"`);

var arrowFunction=(array)=>{
    let inputs = array;
    // inputs[1]='a';
    // console.log(array,inputs);
    // console.log(array===inputs);
    var result = inputs.map(input=>input.charAt(0))
                        .reduce((input1, input2)=> {
                            console.log(input1, input2);
                            return input1+input2;
                            });
    return(`[${array}] becomes "${result}"`);
}
arrowFunction(['']);
module.exports=arrowFunction;