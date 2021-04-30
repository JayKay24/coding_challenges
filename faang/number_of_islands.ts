function numIslands(grid: string[][]): number {
  let result = 0;
  const count = { numIslands: 0 };
  const dfs = (
    grid: string[][],
    row: number,
    col: number,
    count: { numIslands: number }
  ) => {
    if (Array.isArray(grid[row]) && grid[row][col] === "1") {
      grid[row][col] = "0";
      count.numIslands++;

      dfs(grid, row - 1, col, count);
      dfs(grid, row, col + 1, count);
      dfs(grid, row + 1, col, count);
      dfs(grid, row, col - 1, count);
    }

    return count;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      count.numIslands = 0;
      let { numIslands } = dfs(grid, i, j, count);
      if (numIslands > 0) result++;
    }
  }

  return result;
}

export const world = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(world));
