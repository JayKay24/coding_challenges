const lengthOfLongestSubstring = (str, k) => {
  let winStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap = {};

  for (let winEnd = 0; winEnd < str.length; winEnd++) {
    const rightMost = str[winEnd];
    if (!(rightMost in frequencyMap)) {
      frequencyMap[rightMost] = 0;
    }
    frequencyMap[rightMost] += 1;

    maxRepeatLetterCount = Math.max(
      maxRepeatLetterCount,
      frequencyMap[rightMost]
    );

    // Current window size is from windowStart to windowEnd, overall we have a letter which is
    // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
    // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
    // if the remaining letters are more than 'k', it is the time to shrink the window as we
    // are not allowed to replace more than 'k' letters

    if (winEnd - winStart + 1 - maxRepeatLetterCount > k) {
      const leftMost = str[winStart];
      frequencyMap[leftMost] -= 1;
      winStart += 1;
    }

    maxLength = Math.max(maxLength, winEnd - winStart + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("aabccbb", 2));
