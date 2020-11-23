export function knapsackProblem(
  items: [number, number][],
  capacity: number
): [number, number[]] {
  // Write your code here.
  // Replace return below.
  if (capacity < 1 || items.length < 1) return [0, []];
  const dp: number[][] = new Array(items.length).fill([]);
  const idxs = new Array(items.length).fill([]);

  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = 0;
  }

  for (let i = 0; i < dp[0].length; i++) {
    dp[i] = new Array(capacity + 1).fill(0);
  }

  for (let i = 0; i < idxs.length; i++) {
    idxs[i][0] = new Array(capacity + 1).fill([]);
  }

  for (let i = 0; i < idxs[0].length; i++) {
    idxs[i] = new Array(capacity + 1).fill([]);
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      let item = items[i - 1];
      if (!item) break;
      let spaceLeftOver = j - item[1];
      let prevMax = dp[i - 1][j];
      let currentValue = item[0] + dp[i - 1][spaceLeftOver];

      if (spaceLeftOver >= 0 && currentValue > prevMax) {
        idxs[i][j] = [...idxs[i - 1][spaceLeftOver], i - 1];
        dp[i][j] = currentValue;
      } else {
        idxs[i][j] = [...idxs[i - 1][j]];
        dp[i][j] = prevMax;
      }

      // dp[i][j] = spaceLeftOver >= 0 ? Math.max(prevMax, currentValue) : prevMax;
    }
  }

  return [dp[items.length][capacity], idxs[items.length][capacity]];
}

let res = knapsackProblem(
  [
    [1, 2],
    [70, 70],
    [30, 30],
    [69, 69],
    [100, 100],
  ],
  0
);

console.log(res);
