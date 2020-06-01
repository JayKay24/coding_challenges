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

const smallestSubArrayWithGivenSum = (s, arr) => {
  let windowMaxLength = arr.length;
  let minLength = Infinity;
  while (maxSubArraySum(windowMaxLength, arr) >= s) {
    let maxSum = maxSubArraySum(windowMaxLength, arr);
    if (maxSum === s) return windowMaxLength;
    minLength = Math.min(minLength, windowMaxLength);
    windowMaxLength--;
  }
  return minLength;
};

console.log(smallestSubArrayWithGivenSum(7, [2, 1, 5, 2, 3, 2]));
console.log(smallestSubArrayWithGivenSum(7, [2, 1, 5, 2, 8]));