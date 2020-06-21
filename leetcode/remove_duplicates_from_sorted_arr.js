const removeDuplicates = (sortedArr) => {
  let start = 0,
    end = sortedArr.length - 1;

  while (start < end) {
    if (sortedArr[start] === sortedArr[end]) return 1;
    if (sortedArr[start] === sortedArr[start + 1]) {
      sortedArr.splice(start, 1);
    } else {
      start++;
    }
    end = sortedArr.length - 1;
    if (sortedArr[end] === sortedArr[end - 1]) {
      sortedArr.pop();
    }
  }

  return sortedArr.length;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([0, 0, 1, 1, 2, 3, 3, 4, 4, 4]));
