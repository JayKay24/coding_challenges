export function longestSubstringWithoutDuplication(str: string) {
  let charHT: { [prop: string]: number } = {},
    winStart = 0,
    maxWindowLength = -Infinity,
    boundaries: [number, number] = [0, 0];

  for (let winEnd = 0; winEnd < str.length; winEnd++) {
    let currentChar = str[winEnd];
    charHT[currentChar] = (charHT[currentChar] || 0) + 1;

    if (charHT[currentChar] > 1) {
      winEnd--;
      let oldMaxWindowLength = maxWindowLength,
        newWindowLength = winEnd - winStart + 1;

      if (oldMaxWindowLength < newWindowLength) {
        maxWindowLength = newWindowLength;
        boundaries = [winStart, winEnd];
      }

      while (charHT[currentChar] > 1) {
        delete charHT[str[winStart]];
        winStart++;
      }
    } else if (boundaries[1] - boundaries[0] + 1 < winEnd - winStart + 1) {
      boundaries = [winStart, winEnd];
    }
  }

  return str.slice(boundaries[0], boundaries[1] + 1);
}

let res = longestSubstringWithoutDuplication("abacacacaaabacaaaeaaafa");
console.log(res);
