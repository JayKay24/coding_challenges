const sortedFrequency = (sortedArr, num) => {
  let start = 0;
  let end = sortedArr.length - 1;
  if (sortedArr[end] < num) return -1;

  while (start <= end) {
    if (sortedArr[start] === sortedArr[end] && sortedArr[end] === num) {
      return end - start + 1;
    }
    if (sortedArr[start] < num) start++;
    if (sortedArr[end] > num) end--;
  }

  return -1;
};

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4));