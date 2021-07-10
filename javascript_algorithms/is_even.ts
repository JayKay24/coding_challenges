export function isEven(num: number) {
  return (num & 1) === 0;
}

console.log(isEven(22));
