function longestSubStrK(str, k) {
  let lookUp = {};
  let counter = 0;
  let maxCount = 0;
  
  while (true) {
    let char = str[counter];
    if (!char) break;
    if (!lookUp[char]) {
      if (Object.keys(lookUp).length === k) {
        counter = 0;
        str = str.slice(1);
        lookUp = {};
        continue;
      }
    }
    lookUp[char] = true;
    ++counter;
    maxCount = Math.max(counter, maxCount);
  }

  return maxCount;
}

console.log(longestSubStrK("araaci", 1));
console.log(longestSubStrK("cbbebi", 3));