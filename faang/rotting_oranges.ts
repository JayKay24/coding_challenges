export type Coords = [number, number];
export type Tracker = {
  freshCount: number;
  qLevelLength: number;
  minutesElapsed: number;
};

export const directions: Coords[] = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

export enum OrangeState {
  Empty = 0,
  Fresh = 1,
  Rotten = 2,
}

export function bfs(
  grid: number[][],
  queue: Coords[],
  directions: Coords[],
  tracker: Tracker
) {
  if (queue.length && tracker.freshCount > 0) {
    let [row, col] = queue.shift();
    tracker.qLevelLength--;

    for (const [dRow, dCol] of directions) {
      const newRow = row + dRow;
      const newCol = col + dCol;

      if (
        Array.isArray(grid[newRow]) &&
        !isNaN(grid[newRow][newCol]) &&
        grid[newRow][newCol] === OrangeState.Fresh
      ) {
        grid[newRow][newCol] = OrangeState.Rotten;
        tracker.freshCount--;
        queue.push([newRow, newCol]);
      }
    }

    if (tracker.qLevelLength === 0 || tracker.freshCount < 1) {
      tracker.minutesElapsed++;
      tracker.qLevelLength = queue.length;
    }

    bfs(grid, queue, directions, tracker);
  }
}

export function orangesRotting(grid: number[][]): number {
  const queue: Coords[] = [],
    tracker: Tracker = {
      freshCount: 0,
      qLevelLength: queue.length,
      minutesElapsed: 0,
    };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === OrangeState.Fresh) {
        tracker.freshCount++;
      }

      if (grid[i][j] === OrangeState.Rotten) {
        queue.push([i, j]);
      }
    }
  }

  tracker.qLevelLength = queue.length;

  bfs(grid, queue, directions, tracker);

  return tracker.freshCount > 0 ? -1 : tracker.minutesElapsed;
}

export const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

// export const grid = [[0, 2]];

console.log(orangesRotting(grid));
