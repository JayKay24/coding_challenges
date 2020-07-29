const validateSubsequence = (array, sequence) => {
  let seqPointer = 0;

  for (let num of array) {
    if (sequence[seqPointer] === num) {
      seqPointer++;

      if (sequence.length === seqPointer)
        return true;
    }
  }

  return false;
};

let result = validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
// let result = validateSubsequence([1, 2, 3, 4], [9, 3, 4]);
console.log(result);
