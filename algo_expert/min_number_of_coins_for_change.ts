export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  let ways: number[] = new Array(n + 1).fill(Infinity);
  ways[0] = 0;

  for (const denom of denoms) {
    for (let i = 0; i <= n; i++) {
      if (denom <= i) {
        ways[i] = Math.min(ways[i], 1 + ways[i - denom]);
      }
    }
  }

  return ways[n] > n ? -1 : ways[n];
}

let res = minNumberOfCoinsForChange(7, [1, 5, 10]);
console.log(res);
