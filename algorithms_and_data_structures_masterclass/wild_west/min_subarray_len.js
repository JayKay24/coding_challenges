const minSubArrayLen = (arr, k) => {
  let minLen = Infinity,
    windowSum = 0,
    winStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum >= k) {
      minLen = Math.min(minLen, windowEnd - winStart + 1);
      windowSum -= arr[winStart];
      winStart++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
