export const someRecursive = (
  numArr: number[],
  callback: Function
): boolean => {
  let result = callback(numArr[0]);
  if (numArr.length === 1 || result) {
    return result;
  }
  return someRecursive(numArr.slice(1), callback);
};

const isOdd = (num: number) => num % 2 !== 0;
let res = someRecursive([4, 6, 8], isOdd);
console.log(res);
