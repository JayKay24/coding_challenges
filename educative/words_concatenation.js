const findWordsConcatenation = (str, words) => {
  let combinedString = words.join(""),
    reversedCombinedString = "",
    combinedLength = 0,
    startingIndices = [],
    winStart = 0;
  
  if (words.length === 0) return startingIndices;

  for (const word of words) {
    reversedCombinedString = word + reversedCombinedString;
    combinedLength += word.length;
  }

  const wordsToSearchFor = {
    combinedString: { visited: false, str: combinedString },
    reversedCombinedString: { visited: false, str: reversedCombinedString },
  };

  for (let winEnd = 0; winEnd < str.length; winEnd++) {
    if (winEnd - winStart + 1 >= combinedLength) {
      let wordsFound = true;
      let strToSearch = ''
      for (let word in wordsToSearchFor) {
        strToSearch = wordsToSearchFor[word].str;
        const currentSlice = str.slice(winStart, winEnd + 1);
        const wordNotFound = strToSearch !== currentSlice;
        if (wordNotFound) {
          wordsFound = false;
        } else {
          wordsFound = true;
        }

        if (wordsFound) {
          const slicedString = str.slice(0, winEnd + 1);
          if (slicedString.indexOf(strToSearch) !== -1 && !wordsToSearchFor[word].visited) {
            startingIndices.push(slicedString.indexOf(strToSearch));
            wordsToSearchFor[word].visited = true;
          }
        }
      }
      winStart += 1;
    }
  }

  return startingIndices;
};

console.log(findWordsConcatenation("catfoxcat", ["cat", "fox"]));
// console.log(findWordsConcatenation("catcatfoxfox", ["cat", "fox"]));
