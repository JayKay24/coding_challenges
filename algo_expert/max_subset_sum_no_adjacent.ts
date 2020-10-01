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

  let second = array[0],
    first = Math.max(array[1], second);

  for (let i = 2; i < array.length; i++) {
    let current = Math.max(first, array[i] + second);
    second = first;
    first = current;
  }

  return first;
}

let res = maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]);
console.log(res);
