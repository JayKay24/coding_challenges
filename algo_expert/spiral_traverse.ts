export function spiralTraverse(array: number[][]) {
  let spiralled: number[] = [];

  let elementLength = array[0].length;
  let arrayLength = array.length;
  let startRow = 0,
    startCol = 0,
    endCol = elementLength - 1,
    endRow = arrayLength - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let t = startCol; t < elementLength; t++) {
      spiralled.push(array[startRow][t]);
    }

    startRow++;

    for (let r = startRow; r < arrayLength; r++) {
      spiralled.push(array[r][endCol]);
    }

    if (startRow > endRow) break;

    endCol = --elementLength - 1;

    if (startCol > endCol) break;

    for (let b = endCol; b >= startCol; b--) {
      spiralled.push(array[endRow][b]);
    }

    endRow = --arrayLength - 1;

    for (let l = endRow; l >= startRow; l--) {
      spiralled.push(array[l][startCol]);
    }

    startCol++;
  }

  return spiralled;
}

let res = spiralTraverse([
  [1, 2, 3],
  [12, 13, 4],
  [11, 14, 5],
  [10, 15, 6],
  [9, 8, 7],
]);

console.log(res);
