const tripletsWithSmallerSum = (arr, target) => {
  let tripletsCount = 0;
  let triplets = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    if (i === 0 || (i > 0 && arr[i] !== arr[i - 1])) {
      let left = i + 1;
      let right = arr.length - 1;
      let sum = target - arr[i];

      while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum < sum) {
          while (left < right && arr[right] !== arr[right - 1]) {
            triplets.push([arr[i], arr[left], arr[right]]);
            tripletsCount++;
            right--;
          }
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return tripletsCount;
};

// console.log(tripletsWithSmallerSum([-1, 0, 2, 3], 3));
console.log(tripletsWithSmallerSum([-1, 4, 2, 1, 3], 5));
