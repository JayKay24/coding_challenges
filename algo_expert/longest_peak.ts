export function longestPeak(array: number[]) {
  let maxPeakLength = 0;

  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      let currentPeakMaxLength = 3;
      let l = i - 2,
        r = i + 2;
      while (array[l] < array[l + 1]) {
        currentPeakMaxLength++;
        l--;
      }

      while (array[r] < array[r - 1]) {
        currentPeakMaxLength++;
        r++;
      }
      maxPeakLength = Math.max(maxPeakLength, currentPeakMaxLength);
    }
  }

  return maxPeakLength;
}

let res = longestPeak([1, 2, 3, 4, 5, 1]);
console.log(res);
