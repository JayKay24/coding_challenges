const findRotatedIndex = (rotatedArr, num) => {
  let middle = Math.floor((0 + rotatedArr.length - 1) / 2),
    left = middle - 1,
    right = middle + 1;

  if (rotatedArr[middle] === num) return middle;

  while (left >= 0 && right < rotatedArr.length) {
    if (rotatedArr[left] === num) {
      return left;
    } else {
      left--;
    }

    if (rotatedArr[right] === num) {
      return right;
    } else {
      right++;
    }
  }

  return -1;
};

console.log(findRotatedIndex([3, 4, 1, 2], 4));
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8));
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3));
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14));
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12));
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16));
