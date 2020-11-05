export function groupAnagrams(words: string[]) {
  const sumCharCodes = new Map(),
    anagramGroupList: string[][] = [];

  for (const word of words) {
    let wordArray = word.split("");
    wordArray.sort();
    let sortedWord = wordArray.join("");

    let sortedWordAnagramList = sumCharCodes.get(sortedWord);

    if (!sortedWordAnagramList) {
      sumCharCodes.set(sortedWord, [word]);
    } else {
      sortedWordAnagramList.push(word);
    }
  }

  for (const [key, value] of sumCharCodes) {
    anagramGroupList.push(value);
  }

  return anagramGroupList;
}

let res = groupAnagrams([
  "yo",
  "act",
  "flop",
  "tac",
  "foo",
  "cat",
  "oy",
  "olfp",
]);
console.log(res);
