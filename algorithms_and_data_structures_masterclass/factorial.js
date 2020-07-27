function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(--n);
}

console.log(factorial(4));
