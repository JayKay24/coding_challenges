export const capitalizeFirst = (arr: string[], idx: number = 0): string[] => {
  let str = arr[idx];
  if (!str) return arr;
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  arr[idx] = str;
  return capitalizeFirst(arr, ++idx);
};

let res = capitalizeFirst(["car", "taco", "banana"]);
console.log(res);
