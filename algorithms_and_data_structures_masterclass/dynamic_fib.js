function fib(num) {
  const fibCache = {};
  
  const helper = (num) => {
    if (num <= 2) return 1;
    if (fibCache[num]) return fibCache[num];
    fibCache[num] = helper(num - 1) + helper(num - 2);
    return fibCache[num];
  }

  return helper(num);
}

console.log(fib(60));