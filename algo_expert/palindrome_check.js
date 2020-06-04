const isPalindrome = (str) => {
  if (str.length === 1) return true;

  let startPointer = 0;
  let endPointer = str.length - 1;

  while (startPointer < endPointer) {
    if (str[startPointer] !== str[endPointer]) return false;
    startPointer++;
    endPointer--;
  }

  return true;
};

console.log(isPalindrome('abcdcba'));