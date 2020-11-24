export function longestCommonSubsequence(str1: string, str2: string) {
  const dp: number[][] = new Array(str2.length + 1).fill(
    new Array(str1.length + 1).fill(0)
  );

  const idxs = new Array(str2.length + 1).fill(
    new Array(str1.length + 1).fill("")
  );

  for (let i = 1; i < idxs.length; i++) {
    for (let j = 1; j < idxs[i].length; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        idxs[i][j] = idxs[i - 1][j - 1] + str2[i - 1];
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
        idxs[i][j] =
          idxs[i][j - 1].length > idxs[i - 1][j].length
            ? idxs[i][j - 1]
            : idxs[i - 1][j];
      }
    }
  }

  return idxs[str2.length][str1.length].split("");
}

let res = longestCommonSubsequence("ZXVVYZW", "XKYKZPW");
console.log(res);
