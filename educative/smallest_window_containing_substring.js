const findSubstring = (str, pattern) => {
  let winStart = 0,
    isPatternVisited = false,
    charsVisited = {},
    visitedCount = 0,
    patternChars = {},
    winStr = "";

  for (let i = 0; i < pattern.length; i++) {
    patternChars[pattern[i]] = true;
  }

  for (let winEnd = 0; winEnd < str.length; winEnd++) {
    const rightMost = str[winEnd];
    if (!(rightMost in charsVisited)) {
      charsVisited[rightMost] = 0;
      if (rightMost in patternChars) {
        visitedCount += 1;
      }
      if (visitedCount === pattern.length) {
        isPatternVisited = true;
      }
    }
    charsVisited[rightMost] += 1;

    if (isPatternVisited) {
      if (winEnd - winStart + 1 >= pattern.length) {
        winStr = str.slice(winStart, winEnd + 1);
        while (isPatternVisited) {
         const leftMost = winStr[0];
         if (charsVisited[leftMost] === 1 && leftMost in patternChars) {
           isPatternVisited = false;
           break;
         }
         charsVisited[leftMost] -= 1;
         winStr = winStr.slice(1); 
        }
      }
      break;
    }
  }

  return winStr; 
};

console.log(findSubstring("aabdec", "abc"));
console.log(findSubstring("abdabca", "abc"));
console.log(findSubstring("adcad", "abc"));
