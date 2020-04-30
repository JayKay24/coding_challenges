function binarySearch(sortedArr, value) {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (sortedArr[middle] === value) {
      return middle;
    } else if (sortedArr[middle] > value) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 0));