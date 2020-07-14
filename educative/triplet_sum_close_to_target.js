const tripletSumCloseToTarget = (arr, targetSum) => {
  let currentMinimum = Infinity;
  let closestTriplets = [];
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    if (i === 0 || (i > 0 && arr[i] !== arr[i - 1])) {
      let left = i + 1;
      let right = arr.length - 1;
      let sum = targetSum - arr[i];

      while (left < right) {
        let currentSum = arr[left] + arr[right];
        if (currentSum === sum) {
          return [arr[i], arr[left], arr[right]].reduce(reducer);
        } else if (currentSum > sum) {
          let difference = Math.abs(currentSum - sum);
          if (difference < currentMinimum) {
            currentMinimum = difference;
            closestTriplets = [arr[i], arr[left], arr[right]];
          }
          right--;
        } else {
          let difference = Math.abs(currentSum - sum);
          if (difference < currentMinimum) {
            currentMinimum = difference;
            closestTriplets = [arr[i], arr[left], arr[right]];
          }
          left++;
        }
      }
    }
  }

  return closestTriplets.reduce(reducer);
};

console.log(tripletSumCloseToTarget([-2, 0, 1, 2], 2));
console.log(tripletSumCloseToTarget([-3, -1, 1, 2], 1));
console.log(tripletSumCloseToTarget([1, 0, 1, 1], 100));

// console.log(tripletSumCloseToTarget([-3, 0, 1, 2, -1, 1, -2], 0));
// console.log(tripletSumCloseToTarget([-5, 2, -1, -2, 3], 0));
