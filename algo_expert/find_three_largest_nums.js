const findThreeLargestNumbers = (arr) => {
  if (arr.length === 3) {
    arr.sort((a, b) => a - b);
    return arr;
  }
  let threeNums = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let currentMax = Math.max(...threeNums);
    if (currentMax <= arr[i]) {
      threeNums.push(arr[i]);
    } else {
      threeNums.unshift(arr[i]);
      threeNums.sort((a, b) => a - b);
    }
    threeNums.length > 3 && threeNums.shift();
  }

  return threeNums;
};

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);

console.log(findThreeLargestNumbers([10, 5, 9, 10, 12]));
console.log(findThreeLargestNumbers([10, 5, 9]));
