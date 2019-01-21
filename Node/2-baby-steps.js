const sum = () =>{
    array=(process.argv.slice(2));
    // array.slice(2);
    // console.log(array)
    const reducer = (accumulator, currentValue) => Number(accumulator)+Number(currentValue)
    // console.log(array.reduce(reducer))
    return array.reduce(reducer)
}

sum();
module.exports=sum;