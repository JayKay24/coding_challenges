import { multiplyByTwo } from "./multiply_by_two";
import { divideByTwo } from "./divide_by_two";
import { isEven } from "./is_even";
import { isPositive } from "./is_positive";

export function multiply(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;

  const multiplyByOddPositive = () =>
    multiply(multiplyByTwo(a), divideByTwo(b - 1)) + a;

  const multiplyByOddNegative = () =>
    multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;

  const multiplyByEven = () => multiply(multiplyByTwo(a), divideByTwo(b));

  const multiplyByOdd = () =>
    isPositive(b) ? multiplyByOddPositive() : multiplyByOddNegative();

  return isEven(b) ? multiplyByEven() : multiplyByOdd();
}

console.log(multiply(7, 8));
