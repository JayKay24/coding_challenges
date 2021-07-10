export function nonConstructibleChange(coins: number[]): number {
  if (!coins.length) return 1;
  const uniqueChanges: Set<number> = new Set(coins);
  let accum = 0;

  coins.forEach((coin) => {
    accum += coin;
    uniqueChanges.add(coin);
    uniqueChanges.add(accum);
  });

  changeCombinations(coins, uniqueChanges);

  const uniqueArr = [...uniqueChanges];
  uniqueArr.sort((a: number, b: number) => a - b);
  let counter = uniqueArr[0];

  if (counter > 1) return 1;

  for (let i = 1; i < uniqueArr.length; i++) {
    counter++;
    if (uniqueArr[i] !== counter) return counter;
  }

  return counter + 1;
}

export function changeCombinations(
  coins: number[],
  uniqueChanges: Set<number>,
  currSum = 0,
  memo: Map<number, number> = new Map()
): number {
  if (memo.has(currSum)) return <number>memo.get(currSum);
  if (coins.length < 1) return 0;
  if (coins.length === 1) return coins[0];
  let sum = 0;
  for (let i = 0; i < coins.length; i++) {
    const restOfCoins = [...coins.slice(0, i), ...coins.slice(i + 1)];
    const sumRestOfCoins = restOfCoins.reduce((accum, val) => accum + val, 0);
    sum = coins[i] + changeCombinations(restOfCoins, uniqueChanges, i, memo);
    memo.set(sumRestOfCoins, sum);
    uniqueChanges.add(sum);
  }

  return sum;
}

// console.log(
//   nonConstructibleChange([109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4])
// );
console.log(nonConstructibleChange([1, 2, 5]));
