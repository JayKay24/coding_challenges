const searchQuadruplets = (arr: number[], target: number) => {
  let quadruplets: number[] = [],
    reducer = (accum: number, curr: number) => accum + curr,
    winStart = 0;
  
};

let result = searchQuadruplets([4, 1, 2, -1, 1, -3], 1);
result = searchQuadruplets([2, 0, -1, 1, -2, 2], 2);
console.log(result);
