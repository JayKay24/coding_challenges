export const factorial = (num: number, cache = new Map()): number => {
  if (num <= 0) return 1;
  if (cache.has(num)) return cache.get(num);
  cache.set(num, factorial(num - 1, cache));
  return num * cache.get(num);
};

let res = factorial(7);
console.log(res);
