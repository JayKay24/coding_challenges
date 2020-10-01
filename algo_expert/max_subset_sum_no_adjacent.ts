// export function maxSubsetSumNoAdjacent(array: number[]) {
//   let maxSum = 0;
//   let left: number,
//     step = 2,
//     right: number;

//   for (let i = 0; i < array.length; i++) {
//     left = i - step;
//     right = i + step;

//     let currentSum = array[i];

//     while (left > -1 || right < array.length) {
//       if (left > -1) currentSum += array[left];
//       if (right < array.length) currentSum += array[right];

//       left -= step;
//       right += step;
//     }
//     maxSum = Math.max(maxSum, currentSum);
//   }
//   return maxSum;
// }

export function maxSubsetSumNoAdjacent(array: number[]) {
  if (!array.length) return 0;

  if (array.length === 1) return array[0];

  let maxSums = [...array];

  maxSums[1] = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], array[i] + maxSums[i - 2]);
  }

  return maxSums[maxSums.length - 1];
}

let res = maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]);
console.log(res);
