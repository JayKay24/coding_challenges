export function riverSizes(matrix: number[][]) {
  let rSizes: number[] = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        rSizes.push(clearRiver(matrix, i, j));
      }
    }
  }

  return rSizes;
}

const clearRiver = (matrix: number[][], i: number, j: number): number => {
  if (
    i < 0 ||
    i >= matrix.length ||
    j < 0 ||
    j >= matrix[i].length ||
    matrix[i][j] === 0
  ) {
    return 0;
  }

  matrix[i][j] = 0;

  return (
    1 +
    clearRiver(matrix, i + 1, j) +
    clearRiver(matrix, i, j + 1) +
    clearRiver(matrix, i - 1, j) +
    clearRiver(matrix, i, j - 1)
  );
};

let res = riverSizes([
  [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
  [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
]);

console.log(res);
