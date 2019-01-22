const roll = (array) => {
  let total = 0;
  let strike = false;
  let spare = false;
  let frame = 1;
  // const reducer = (val, val1) => {
  //   if (val==10)
  //   console.log(val, val1)
  //   if (val+val1=== 10){

  //   }
  // }

  // array.reduce(reducer);
  for (let i = 0; i < array.length; i += 2) {
    // console.log (array[i], array[i+1]);
    if (array[i] === 10) {
      strike = true;
      // console.log("yayy Strike")
      // console.log(array[i], array[i+1],total, array[i+2])
      total = total + array[i] + array[i + 1] + array[i + 2];
      if (frame === 10) {
        break;
      }
      console.log(total);
    }
    if (array[i] + array[i + 1] === 10 && (strike === false)) {
      spare = true;
      // console.log("yayy spare")
      total = total + array[i] + array[i + 1] + array[i + 2];
    }
    if ((strike === false) && (spare === false)) {
      // console.log("yayy else",  array[i], array[i+1]);
      total = total + array[i] + array[i + 1];
    }
    frame += 1;
    // console.log(total);
    if (strike === true) {
      i -= 1;
    }
    strike = false;
  }
  return (total);
};

// const score = () => {

// }

roll([0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
module.exports = { roll };
