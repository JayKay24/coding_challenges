export function maxSumIncreasingSubsequence(
  array: number[]
): [number, number[]] {
  const sequences = new Array(array.length).fill(null);
  const sums = [...array];
  let maxSumIdx = 0;

  const buildSequence = (currentIdx: number | null) => {
    const sequence: number[] = [];

    while (currentIdx !== null) {
      sequence.push(array[currentIdx]);
      currentIdx = sequences[currentIdx];
    }

    return sequence.reverse();
  };

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];

    for (let j = 0; j < i; j++) {
      let otherNum = array[j],
        combinedSums = sums[j] + currentNum;

      if (otherNum < currentNum && combinedSums >= sums[i]) {
        sums[i] = combinedSums;
        sequences[i] = j;
      }
    }

    if (sums[i] >= sums[maxSumIdx]) {
      maxSumIdx = i;
    }
  }

  return [sums[maxSumIdx], buildSequence(maxSumIdx)];
}

let res = maxSumIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30]);
console.log(res);
