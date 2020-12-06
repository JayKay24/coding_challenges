import { callWithInputReadFromFile } from "./readInputArrayFromFile";

export const findThreeEntries = (entries: number[]) => {
  entries.sort((a, b) => a - b);
  const expectedSum = 2020;
  const multiply = (accum: number, num: number) => accum * num;
  const add = (accum: number, num: number) => accum + num;

  let result = -Infinity;

  outer_loop: for (let i = 0; i < entries.length; i++) {
    let current = entries[i],
      left = i + 1,
      right = entries.length - 1;

    const boundariesAreValid = left > i && left < right;

    while (boundariesAreValid) {
      let numbers = [current, entries[left], entries[right]];
      let sum = numbers.reduce(add, 0);
      if (sum === expectedSum) {
        result = numbers.reduce(multiply, 1);
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
