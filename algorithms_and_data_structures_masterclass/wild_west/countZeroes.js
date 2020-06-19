const countZeroes = (array) => {
  let sum = 0;

  const countZeroesRecur = (array) => {
    let start = 0,
      end = array.length - 1,
      middle = Math.floor((start + end) / 2);

    if (array.length === 1) {
      if (array[0] === 0) sum += 1;
      return;
    }

    if (array[middle] === 0) {
      sum += end - middle + 1;
      end = middle - 1;
      countZeroesRecur(array.slice(start, end + 1));
    } else {
      countZeroesRecur(array.slice(middle + 1));
    }
  };

  countZeroesRecur(array);

  return sum;
};

console.log(countZeroes([1, 1, 1, 1, 0, 0]));
console.log(countZeroes([1, 0, 0, 0, 0]));
console.log(countZeroes([0, 0, 0]));
console.log(countZeroes([1, 1, 1, 1]));
