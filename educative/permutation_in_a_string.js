const findPermutation = (str, pattern) => {
  let winStart = 0,
    sumWinStrCharCode = 0,
    sumPatternCharcode = 0;

  for (let i = 0; i < pattern.length; i++) {
    sumPatternCharcode += pattern.charCodeAt(i);
  }

  for (let winEnd = 0; winEnd < str.length; winEnd++) {
    sumWinStrCharCode += str.charCodeAt(winEnd);

    if (winEnd - winStart + 1 === pattern.length) {
      if (sumWinStrCharCode === sumPatternCharcode) return true;

      sumWinStrCharCode -= str.charCodeAt(winStart);
      winStart++;
    }
  }

  return false;
};

console.log(findPermutation("oidbcaf", "abc"));
console.log(findPermutation("odicf", "dc"));
console.log(findPermutation("bcdxabcdy", "bcdyabcdx"));
console.log(findPermutation("aaacb", "abc"));
