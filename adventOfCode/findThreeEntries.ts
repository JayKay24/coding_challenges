import { callWithInputReadFromFile } from "./readInputFromFile";

export const findThreeEntries = (entries: number[]) => {
  entries.sort((a, b) => a - b);
  const expectedSum = 2020;
  const multiplier = (accum: number, num: number) => accum * num;
  const addition = (accum: number, num: number) => accum + num;

  let result = -Infinity;

  outer_loop: for (let i = 0; i < entries.length; i++) {
    let current = entries[i],
      left = i,
      right = entries.length - 1;

    while (left < right) {
      let numbers = [current, entries[left], entries[right]];
      let sum = numbers.reduce(addition, 0);
      if (sum === expectedSum) {
        result = numbers.reduce(multiplier, 1);
        break outer_loop;
      } else if (sum < expectedSum) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

callWithInputReadFromFile<string>(findThreeEntries, parseInt);
