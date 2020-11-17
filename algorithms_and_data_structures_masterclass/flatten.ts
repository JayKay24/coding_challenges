export const flatten = (nestedArr: any[], result: number[] = []): number[] => {
  for (const item of nestedArr) {
    if (Array.isArray(item)) {
      
    } else {
      result.push(item);
    }
  }

  return result;
};

let res = flatten([1, [2, [3, 4], [[5]]]]);
console.log(res);
