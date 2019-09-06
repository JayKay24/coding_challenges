function hourGlassSum(arr) {
  let allMatricesSum = [];

  for(let i = 0; i < arr.length - 2; i++) {
    for(let j = 1; j <= arr[i].length - 2; j++) {
      let sum = 0;
      sum += arr[i][j - 1];
      sum += arr[i][j];
      sum += arr[i][j + 1];
      sum += arr[i + 1][j];
      sum += arr[i + 2][j - 1];
      sum += arr[i + 2][j];
      sum += arr[i + 2][j + 1];
      allMatricesSum.push(sum);
    }
  };

  return Math.max(...allMatricesSum); 
}

sixBySixMatrix = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
sum = hourGlassSum(sixBySixMatrix);
