export function setBit(num: number, bitPosition: number) {
  return num | (1 << bitPosition);
}

console.log(setBit(5, 3));
