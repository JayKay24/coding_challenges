const pairWithTargetSum = (arr, target) => {
  let start = 0,
    end = arr.length - 1,
    currentSum = 0;

  while (start < end) {
    currentSum = arr[start] + arr[end];
    if (currentSum === target) {
      return [start, end];
    }
    if (currentSum > target) end--;
    if (currentSum < target) start++;
  }

  return [-1, -1];
};

console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6));
console.log(pairWithTargetSum([2, 5, 9, 11], 11));
