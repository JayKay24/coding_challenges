export function minRewards(scores: number[]) {
  const rewards: number[] = new Array(scores.length).fill(1),
    rewardsReducer = (accum: number, num: number) => accum + num,
    localMinsIdxs: number[] = [],
    localMaxsIdxs: number[] = [];

  for (let i = 1; i < scores.length - 1; i++) {
    let currentNum = scores[i],
      previousNum = scores[i - 1],
      nextNum = scores[i + 1];

    if (previousNum < currentNum && currentNum > nextNum) {
      localMaxsIdxs.push(i);
    } else if (previousNum > currentNum && currentNum < nextNum) {
      localMinsIdxs.push(i);
    }
  }

  return rewards.reduce(rewardsReducer, 0);
}

let res = minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5]);
console.log(res);
