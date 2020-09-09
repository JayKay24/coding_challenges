export function findFactorialRecursive(num: number): number {
  if (num <= 1) return 1;
  return num * findFactorialRecursive(num - 1);
}

console.log(findFactorialRecursive(5));
