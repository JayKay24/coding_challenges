const lengthOfLongestSubarrayWithOnes = (arr, k) => {
  let winStart = 0,
    maxLength = 0,
    maxOnesCount = 0;

  for (let winEnd = 0; winEnd < arr.length; winEnd++) {
    const rightMost = arr[winEnd];

    if (rightMost === 1) maxOnesCount += 1;

    if (winEnd - winStart + 1 - maxOnesCount > k) {
      const leftMost = arr[winStart];
      if (leftMost === 1) maxOnesCount -= 1;
      winStart += 1;
    }

    maxLength = Math.max(maxLength, winEnd - winStart + 1);
  }

  return maxLength;
};

console.log(
  lengthOfLongestSubarrayWithOnes([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)
);
console.log(
  lengthOfLongestSubarrayWithOnes([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
);
