const removeDuplicates = (sortedArr) => {
  let start = 0,
    end = sortedArr.length - 1;

  while (start < end) {
    if (sortedArr[start] === sortedArr[end]) {
      sortedArr.splice(start, end - start);
      break;
    }
    if (sortedArr[start] === sortedArr[start + 1]) {
      sortedArr.splice(start, 1);
      end--;
    } else {
      start++;
    }
    if (sortedArr[end] === sortedArr[end - 1]) {
      sortedArr.splice(end - 1, 1);
    }
    end--;
  }

  return sortedArr.length;
};

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(removeDuplicates([2, 2, 2, 11]));
console.log(removeDuplicates([1, 2, 2, 2]));
console.log(removeDuplicates([1, 2, 2, 2, 4]));