export const productOfArray = (arr: number[]): number => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
};

let res = productOfArray([1, 2, 3]);
console.log(res);
