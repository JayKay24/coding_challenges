export function multiplyUnsigned(number1: number, number2: number) {
  let result = 0;
  let multiplier = number2;
  let bitIndex = 0;

  while (multiplier !== 0) {
    if (multiplier & 1) {
      result += number1 << bitIndex;
    }
  }

  bitIndex++;
  multiplier >>= 1;
}
