export const directions: number[][] = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

export const dfs = (
  matrix: number[][],
  row: number,
  col: number,
  seen: boolean[][],
  values: number[]
) => {
  if (
    Array.isArray(matrix[row]) &&
    !isNaN(matrix[row][col]) &&
    !seen[row][col]
  ) {
    values.push(matrix[row][col]);
    seen[row][col] = true;
    for (const [dRow, dCol] of directions) {
      const nextRow = row + dRow;
      const nextCol = col + dCol;

      dfs(matrix, nextRow, nextCol, seen, values);
    }
  }
};

export const traverseDFS = (matrix: number[][]): number[] => {
  let seen: boolean[][] = new Array(matrix.length).fill([]);

  seen = seen.map(() => new Array(matrix[0].length).fill(false));

  const values: number[] = [];

  dfs(matrix, 0, 0, seen, values);

  return values;
};

export const twoDArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(traverseDFS(twoDArr));
