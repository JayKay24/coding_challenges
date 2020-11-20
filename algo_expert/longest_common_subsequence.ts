export function longestCommonSubsequence(str1: string, str2: string) {
  const result: string[] = [],
    dp = new Array(str2.length + 1).fill(new Array(str1.length + 1).fill([]));

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = [...dp[i - 1][j - 1], ...str2[i - 1]];
      } else {
        dp[i][j] =
          dp[i - 1][j].length > dp[i][j - 1].length
            ? dp[i - i][j]
            : dp[i][j - 1];
      }
    }
  }

  return dp[str2.length][str1.length];
}

// export function longestCommonSubsequence(str1: string, str2: string) {
//   const lcs: string[][][] = [];
//   for (let i = 0; i < str2.length + 1; i++) {
//     const row = new Array(str1.length + 1).fill([]);
//     lcs.push(row);
//   }
//   for (let i = 1; i < str2.length + 1; i++) {
//     for (let j = 1; j < str1.length + 1; j++) {
//       if (str2[i - 1] === str1[j - 1]) {
//         lcs[i][j] = lcs[i - 1][j - 1].concat(str2[i - 1]);
//       } else {
//         lcs[i][j] =
//           lcs[i - 1][j].length > lcs[i][j - 1].length
//             ? lcs[i - 1][j]
//             : lcs[i][j - 1];
//       }
//     }
//   }

//   return lcs[str2.length][str1.length];
// }

let res = longestCommonSubsequence("bd", "abcd");
console.log(res);
