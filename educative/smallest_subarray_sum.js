const findSmallestSubArray = (array, S) => {
  let windowSum = 0, windowStart = 0, minLength = Infinity;

  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];

    while (windowSum >= S) {
      minLength = Math.min(windowEnd - windowStart + 1, minLength);
      windowSum -= array[windowStart];
      windowStart++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

console.log(findSmallestSubArray([2, 1, 5, 2, 8], 7));
console.log(findSmallestSubArray([2, 1, 5, 2, 3, 2], 7));
console.log(findSmallestSubArray([3, 4, 1, 1, 6], 8));