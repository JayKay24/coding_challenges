export function fourNumberSum(array: number[], targetSum: number) {
  let result: number[][] = [];
  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let left = j + 1,
        right = array.length - 1,
        quadruplets: number[] = [];

      while (left < right) {
        quadruplets = [array[i], array[j], array[left], array[right]];
        let sum = quadruplets.reduce((acc, num) => acc + num, 0);

        if (sum === targetSum) {
          result.push(quadruplets);
          left++;
          right--;
        } else if (sum < targetSum) {
          left++;
        } else {
          right--;
        }

        while (j < array.length && array[j] === array[j - 1]) j++;
        while (i < array.length && array[i] === array[i - 1]) i++;
      }
    }
  }

  return result;
}

let res = fourNumberSum([7, 6, 4, -1, 1, 2], 16);
console.log(res);
