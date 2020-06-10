const findLongestSubstring = (str) => {
  let maxLength = 0,
    windowStr = "",
    visitedCount = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    windowStr += str[windowEnd];
    if (visitedCount[str[windowEnd]]) {
      visitedCount[str[windowEnd]]++;
    } else {
      visitedCount[str[windowEnd]] = 1;
    }

    while (visitedCount[str[windowEnd]] > 1) {
      let firstChar = windowStr.charAt(0);
      visitedCount[firstChar]--;
      windowStr = windowStr.slice(1);
    }

    maxLength = Math.max(maxLength, windowStr.length);
  }

  return maxLength;
};

console.log(findLongestSubstring("thecatinthehat"));
