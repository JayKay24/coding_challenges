export function removeIslands(matrix: number[][]) {
  enum Colors {
    white = 0,
    black = 1,
  }

  let seen = Array.from(new Array(matrix.length).fill([]), () =>
    new Array(matrix[0].length).fill(false)
  );

  let valid = true;

  const dfs = (matrix: number[][], row: number, col: number): boolean => {
    if (!Array.isArray(matrix[row])) return false;

    if (matrix[row][col] === Colors.white) return true;

    if (seen[row][col]) return true;

    let result = true;

    if (matrix[row][col] === Colors.black) {
      seen[row][col] = true;

      if (
        row <= 0 ||
        row >= matrix.length - 1 ||
        col >= matrix[row].length - 1 ||
        col <= 0
      ) {
        valid = false;
        result = false;
        return result;
      } else {
        const right = dfs(matrix, row, col + 1);
        valid = right && valid;

        const down = dfs(matrix, row + 1, col);
        valid = down && valid;

        const left = dfs(matrix, row, col - 1);
        valid = left && valid;

        const up = dfs(matrix, row - 1, col);
        valid = up && valid;

        result = valid && right && down && left && up;

        if (result) {
          matrix[row][col] = Colors.white;
        } else {
          valid = false;
        }
      }
    }

    return result;
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      valid = true;
      seen = Array.from(new Array(matrix.length).fill([]), () =>
        new Array(matrix[0].length).fill(false)
      );
      dfs(matrix, i, j);
    }
  }

  return matrix;
}

console.log(
  removeIslands([
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
  ])
);

// console.log(
//   removeIslands([
//     [1, 0, 0, 0],
//     [0, 1, 1, 0],
//     [0, 0, 1, 0],
//     [0, 1, 0, 0],
//   ])
// );
// console.log(
//   removeIslands([
//     [1, 0, 0, 0],
//     [0, 1, 1, 0],
//     [0, 0, 1, 0],
//     [0, 1, 1, 0],
//   ])
// );
