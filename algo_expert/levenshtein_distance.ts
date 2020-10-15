export function levenshteinDistance(str1: string, str2: string) {
  let edits = new Array(str2.length + 1).fill(Infinity);
  for (let item = 0; item < edits.length; item++) {
    edits[item] = new Array(str1.length + 1).fill(Infinity);
  }

  edits[0][0] = 0;

  for (let i = 1; i < edits[0].length; i++) {
    edits[0][i] = edits[0][i - 1] + 1;
  }

  for (let i = 1; i < edits.length; i++) {
    edits[i][0] = edits[i - 1][0] + 1;
  }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] =
          Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1]) + 1;
      }
    }
  }

  let lastItem = edits[edits.length - 1];
  lastItem = lastItem[lastItem.length - 1];

  return lastItem;
}

let res = levenshteinDistance("abc", "yabd");
console.log(res);
