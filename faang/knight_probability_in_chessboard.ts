export type Coords = [number, number];
export const directions: Coords[] = [
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
];

export function knightProbability(
  n: number,
  k: number,
  row: number,
  column: number
): number {
  let visited = Array.from(new Array(n), () => new Array(n).fill(false));

  let chessboard = Array.from(new Array(n), () => new Array(n).fill(true));

  return moveKnight(k, row, column, visited, chessboard);
}

export function moveKnight(
  k: number,
  row: number,
  col: number,
  visited: boolean[][],
  chessboard: boolean[][]
): number {
  let result = 0;
  if (!Array.isArray(chessboard[row]) || !Array.isArray(chessboard[col])) {
    return 0;
  }

  if (k === 0) {
    let counter = 0;
    for (const [dRow, dCol] of directions) {
      const newRow = row + dRow;
      const newCol = col + dCol;

      if (
        Array.isArray(chessboard[newRow]) &&
        chessboard[newRow][newCol] &&
        !visited[newRow][newCol]
      ) {
        counter++;
      }
    }

    return counter / 8;
  }

  for (const [dRow, dCol] of directions) {
    if (k === 0) break;
    const newRow = row + dRow;
    const newCol = col + dCol;

    if (
      Array.isArray(visited[newRow]) &&
      Array.isArray(visited[newRow][newCol]) &&
      !visited[newRow][newCol]
    ) {
      visited[newRow][newCol] = true;
    }
    moveKnight(--k, newRow, newCol, visited, chessboard);
  }
}

console.log(knightProbability(3, 2, 0, 0));
