const findStringAnagrams = (str, pattern) => {
  let winStart = 0,
    sumWinStrCharCode = 0,
    sumPatternCharcode = 0,
    startingIndices = [];

  for (let i = 0; i < pattern.length; i++) {
    sumPatternCharcode += pattern.charCodeAt(i);
  }

  for (let winEnd = 0; winEnd < str.length; winEnd++) {
    sumWinStrCharCode += str.charCodeAt(winEnd);

    if (winEnd - winStart + 1 === pattern.length) {
      if (sumWinStrCharCode === sumPatternCharcode) {
        startingIndices.push(winStart);
      }

      sumWinStrCharCode -= str.charCodeAt(winStart);
      winStart++;
    }
  }

  return startingIndices;
};

console.log(findStringAnagrams("ppqp", "pq"));
console.log(findStringAnagrams("abbcabc", "abc"));
