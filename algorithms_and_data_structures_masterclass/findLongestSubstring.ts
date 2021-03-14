export const findLongestSubstring = (inputStr: string) => {
  if (inputStr.length === 0) return 0;
  if (inputStr.length === 1) return 1;
  let maxLength = -Infinity,
    winStart = 0,
    charCount: { [prop: string]: number } = {};

  for (let winEnd = 0; winEnd < inputStr.length; winEnd++) {
    charCount[inputStr[winEnd]] = (charCount[inputStr[winEnd]] || 0) + 1;
    let count = charCount[inputStr[winEnd]];
    if (count > 1) {
      let duplicate = inputStr[winEnd];
      winEnd--;
      while (duplicate in charCount) {
        delete charCount[inputStr[winStart]];
        winStart++;
      }
    } else {
      maxLength = Math.max(winEnd - winStart + 1, maxLength);
    }
  }
  return maxLength === -Infinity ? 1 : maxLength;
};

let res = findLongestSubstring("dvdf");
console.log(res);
