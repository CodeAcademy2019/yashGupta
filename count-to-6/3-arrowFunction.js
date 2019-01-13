var inputs = process.argv.slice(2);
    var result = inputs.map(input=>input.charAt(0))
                        .reduce((input1, input2)=> input1+input2);
console.log(`[${inputs}] becomes "${result}"`);