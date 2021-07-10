export function getBit(num: number, bitPosition: number) {
  return (num >> bitPosition) & 1;
}

console.log(getBit(5, 2));
