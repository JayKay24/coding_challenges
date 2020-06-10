const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwaps = false;
        swap(arr, j, j+1);
      }
    }
    if (noSwaps) break;
  }

  return arr;
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));