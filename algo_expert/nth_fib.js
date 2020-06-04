const getNthFib = (n) => {
  let fibs = [0, 1];

  if (n <= 1) return fibs[0];
  if (n === 2) return fibs[1];

  for (let i = 2; i < n; i++) {
    fibs.push(fibs[i - 1] + fibs[i - 2]);
  }

  return fibs[n - 1];
}

console.log(getNthFib(6));
console.log(getNthFib(2));