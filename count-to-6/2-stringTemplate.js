// console.log(`Hello, ${process.argv[2]}!
// Your name lowercased is "${process.argv[2].toLowerCase()}".`)

function templateString(argument){
    return `Hello, ${argument}!
    Your name lowercased is ${argument.toLowerCase()}.`
}
module.exports=templateString;