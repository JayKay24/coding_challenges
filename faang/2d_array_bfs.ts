export const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

export type Coords = [number, number];

export const bfs = (
  matrix: number[][],
  seen: boolean[][],
  queue: Coords[],
  values: number[]
): void => {
  if (!queue.length) return;

  const [row, col] = queue.shift();

  if (
    Array.isArray(matrix[row]) &&
    !isNaN(matrix[row][col]) &&
    !seen[row][col]
  ) {
    values.push(matrix[row][col]);
    seen[row][col] = true;

    for (const [dRow, dCol] of directions) {
      const newRow = row + dRow;
      const newCol = col + dCol;

      seen[newRow] && !seen[newRow][newCol] && queue.push([newRow, newCol]);
    }
  }

  bfs(matrix, seen, queue, values);
};

export const traverseBFS = (matrix: number[][]) => {
  let seen = new Array(matrix.length).fill([]);
  seen = seen.map(() => new Array(matrix[0].length).fill(false));

  const queue: Coords[] = [[0, 0]];

  const values: number[] = [];

  bfs(matrix, seen, queue, values);

  return values;
};

export const twoDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(traverseBFS(twoDArray));
