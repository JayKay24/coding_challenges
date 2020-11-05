type Range = [number, number];

export function searchInSortedMatrix(
  matrix: number[][],
  target: number
): Range {
  let idxs: Range = [-1, -1];
  let row = 0,
    column = 0;

  while (row < matrix.length) {
    let rowArray = matrix[row];
    let targetIdx = binarySearch(rowArray, target);
    if (targetIdx >= 0) {
      idxs = [row, targetIdx];
      break;
    }

    let columnArray: number[] = matrix.map((arr) => arr[column]);

    targetIdx = binarySearch(columnArray, target);

    if (targetIdx >= 0) {
      idxs = [targetIdx, row];
      break;
    }

    row++;
    column++;
  }

  return idxs;
}

let binarySearch = (array: number[], num: number) => {
  const getMiddle = (left: number, right: number) =>
    Math.floor((left + right + 1) / 2);

  let left = 0,
    right = array.length - 1,
    middle = getMiddle(left, right);

  while (left <= right) {
    if (array[middle] === num) {
      return middle;
    } else if (array[middle] > num) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = getMiddle(left, right);
  }

  return -1;
};

let res = searchInSortedMatrix(
  [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
  ],
  -3000
);

// let res = binarySearch([1, 4, 7, 12, 15, 1000], 15);

console.log(res);
