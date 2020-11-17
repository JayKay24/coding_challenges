/*
  Problem:
    Find the sum of the first N numbers.
  Objective function:
    f(i) is the sum of the first i elements.
  Recurrence relation:
    f(n) = f(n-1) + n
 */
export const sumNNumbers = (num: number) => {
  const dp: null[] | number[] = new Array(num).fill(null);

  dp[0] = 0;
  for (let i = 1; i < num + 1; i++) {
    dp[i] = dp[i - 1] + i;
  }

  return dp[dp.length - 1];
};

let res = sumNNumbers(3);
console.log(res);
