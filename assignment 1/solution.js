const roll = (array) => {
  let total = 0;
  let strike = false;
  let spare = false;
  let frame = 1;
  for (let i = 0; i < array.length; i += 2) {
    if (array[i] === 10) {
      strike = true;
      total = total + array[i] + array[i + 1] + array[i + 2];
      if (frame === 10) {
        break;
      }
    }
    if (array[i] + array[i + 1] === 10 && (strike === false)) {
      spare = true;
      total = total + array[i] + array[i + 1] + array[i + 2];

      if (frame === 10) {
        break;
      }
    }
    if ((strike === false) && (spare === false)) {
      total = total + array[i] + array[i + 1];
    }
    frame += 1;
    if (strike === true) {
      i -= 1;
    }
    strike = false; spare = false;
  }
  if (frame < 10) {
    return 'Game Quit.';
  }

  return (total);
};

const score = array => roll(array);
module.exports = { roll, score };
