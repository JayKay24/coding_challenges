// Find the two entries that sum to 2020; what do you get if you multiply them together?

import { callWithInputReadFromFile } from "./readInputArrayFromFile";

export const findTwoEntries = (entries: number[]) => {
  let result: number = Infinity,
    compliments = new Set(),
    expectedSum = 2020;

  for (const num of entries) {
    let compliment = expectedSum - num;
    if (compliments.has(num)) {
      result = num * compliment;
      break;
    } else {
      compliments.add(compliment);
    }
  }

  return result;
};

callWithInputReadFromFile<string>(findTwoEntries, parseInt);
