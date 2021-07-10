export function isPositive(num: number) {
  if (num === 0) return false;

  return ((num >> 31) & 1) === 0;
}

console.log(isPositive(-5));
