export function clearBit(num: number, bitPosition: number) {
  const mask = ~(1 << bitPosition);

  return num & mask;
}

console.log(clearBit(5, 2));
