import { Coords, directions } from "./rotting_oranges";

export enum Rooms {
  Wall = -1,
  Gate = 0,
  Empty = Infinity,
}

export function bfs(
  rooms: number[][],
  seen: boolean[][],
  queue: Coords[],
  level: number = 0
): number[][] {
  if (queue.length) {
    if (!queue.length) return rooms;
    const [row, col] = queue.shift();

    if (
      Array.isArray(rooms[row]) &&
      !isNaN(rooms[row][col]) &&
      rooms[row][col] >= Rooms.Gate &&
      !seen[row][col]
    ) {
      level = rooms[row][col] === Rooms.Gate ? 0 : level;
      rooms[row][col] = Math.min(rooms[row][col], level);
      seen[row][col] = true;

      for (const [dRow, dCol] of directions) {
        const newRow = row + dRow;
        const newCol = col + dCol;

        if (
          Array.isArray(rooms[newRow]) &&
          !isNaN(rooms[newRow][newCol]) &&
          !seen[newRow][newCol]
        ) {
          queue.push([newRow, newCol]);
          bfs(rooms, seen, queue, level + 1);
        }
      }
    }
  }
}

export function dfs(
  rooms: number[][],
  seen: boolean[][],
  row: number,
  col: number,
  level: number = 0
) {
  if (
    Array.isArray(rooms[row]) &&
    !isNaN(rooms[row][col]) &&
    rooms[row][col] >= Rooms.Gate &&
    !seen[row][col]
  ) {
    rooms[row][col] = Math.min(rooms[row][col], level);
    seen[row][col] = true;

    dfs(rooms, seen, row - 1, col, level + 1);
    dfs(rooms, seen, row, col + 1, level + 1);
    dfs(rooms, seen, row + 1, col, level + 1);
    dfs(rooms, seen, row, col - 1, level + 1);
  }
}

export function wallsAndGates(rooms: number[][]) {
  const queue: Coords[] = [];
  let seen = new Array(rooms.length).fill([]);

  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[i].length; j++) {
      if (rooms[i][j] === Rooms.Gate) {
        seen = seen.map(() => new Array(rooms[0].length).fill(false));
        bfs(rooms, seen, [[i, j]], 0);
        queue.push([i, j]);
        // dfs(rooms, seen, i, j, 0);
      }
    }
  }

  return rooms;
}

export const rooms = [
  [Infinity, -1, 0, Infinity],
  [Infinity, Infinity, Infinity, -1],
  [Infinity, -1, Infinity, -1],
  [0, -1, Infinity, Infinity],
];

console.log(wallsAndGates(rooms));
