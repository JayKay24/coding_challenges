export const power = (base: number, exponent: number): number => {
  if (exponent <= 0) return 1;
  return base ** power(base, exponent - 1);
};

let res = power(2, 3);
console.log(res);
