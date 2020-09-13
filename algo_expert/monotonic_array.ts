export function isMonotonic(array: number[]) {
  if (array.length <= 1) return true;

  let maxNum = Math.max(array[0], array[array.length - 1]);
  if (maxNum === array[0]) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maxNum || array[i] > array[i - 1]) return false;
    }
  } else {
    for (let j = 1; j < array.length; j++) {
      if (array[j] > maxNum || array[j] < array[j - 1]) return false;
    }
  }

  return true;
}

// console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));
// console.log(isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -9001]));
console.log(
  isMonotonic([-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11])
);
