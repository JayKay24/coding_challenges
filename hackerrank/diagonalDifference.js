function count(arr, elem) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == elem) {
          count++;
      }
  }
  return count;
}

function mode(arr) {
  let maxCount = 0;
  let modeValue = 0;
  for (let i = 0; i < arr.length; i++) {
      let currentCount = count(arr, arr[i]);
      if (maxCount < currentCount) {
          maxCount = currentCount;
          modeValue = arr[i];
      }
  }
  return modeValue;
}

function diagonalDifference(arr) {
  // Write your code here
  let primaryDiagonal = 0, secondaryDiagonal = 0;
  const arrLengths = arr.map(x => x.length);
  const maxLength = mode(arrLengths);
  const filt = x => x.length === maxLength;
  const matricesArr = arr.filter(filt);

  let firstCounter = 0;
  for (let i = 0; i < matricesArr.length; i++) {
      let temp = matricesArr[i][firstCounter];
      primaryDiagonal += temp;
      firstCounter += 1;
  }
  let secondCounter = 0;
  for (let i = matricesArr.length - 1; i <= matricesArr.length - 1 && i > -1; i--) {
      let temp = matricesArr[i][secondCounter];
      secondaryDiagonal += temp;
      secondCounter += 1;
  }

  return Math.abs(primaryDiagonal - secondaryDiagonal);
}
let arr = [[4], [-1, 1, -7, -8], [-10, -8, -5, -2], [0, 9, 7, -1], [4, 4, -2, 1]];

console.log(diagonalDifference(arr));
