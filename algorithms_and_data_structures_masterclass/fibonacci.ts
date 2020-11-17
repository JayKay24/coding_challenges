export const fib = (num: number, cache = new Map()): number => {
  if (num <= 2) return 1;
  if (cache.has(num)) return cache.get(num);

  let result = fib(num - 1) + fib(num - 2);
  cache.set(num, result);
  return cache.get(num);
};

let res = fib(35);
console.log(res);
