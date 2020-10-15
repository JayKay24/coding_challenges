export function kadanesAlgorithm(array: number[]) {
  let maxSum = array[0],
    currSum = maxSum;

  for (let i = 1; i < array.length; i++) {
    currSum = Math.max((currSum += array[i]), array[i]);

    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}

let res = kadanesAlgorithm([
  3,
  5,
  -9,
  1,
  3,
  -2,
  3,
  4,
  7,
  2,
  -9,
  6,
  3,
  1,
  -5,
  4,
]);
console.log(res);
