export function minimumWaitingTime(
  queries: number[],
  swapTimes = 1,
  minimum = Infinity
): number {
  if (queries.length < 2) return 0;
  if (swapTimes === queries.length) return minimum;

  const currentConfig: number[] = new Array(queries.length).fill(Infinity);
  currentConfig[0] = 0;
  let currentTotal = 0;
  let currentConfigTotal = currentTotal;

  for (let i = 1; i < queries.length; i++) {
    currentTotal += queries[i - 1];
    currentConfig[i] = currentTotal;
    currentConfigTotal += currentConfig[i];
  }

  swap<number>(queries);

  return Math.min(
    minimum,
    currentConfigTotal,
    minimumWaitingTime(queries, ++swapTimes, currentConfigTotal)
  );
}

export function swap<T>(arr: T[]) {
  const firstEl: T = <T>arr.shift();
  arr.push(firstEl);
}

// console.log(minimumWaitingTime([17, 4, 3]));
// console.log(minimumWaitingTime([3, 2, 1, 2, 6]));
console.log(minimumWaitingTime([5, 1, 4]));
