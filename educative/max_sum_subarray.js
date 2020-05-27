const maxSubArraySum = (k, arr) => {
  let windowSum = 0.0;
  let windowStart = 0;
  let windowMaxSum = -Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      windowMaxSum = Math.max(windowMaxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return windowMaxSum;
};

console.log(maxSubArraySum(3, [2, 1, 5, 1, 3, 2]));
console.log(maxSubArraySum(2, [2, 3, 4, 1, 5]));
