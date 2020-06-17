const binarySearch = (sortedArr, target) => {
  let start = 0;
  let end = sortedArr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    if (sortedArr[middle] === target) return middle;
    if (sortedArr[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return -1;
};

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));
