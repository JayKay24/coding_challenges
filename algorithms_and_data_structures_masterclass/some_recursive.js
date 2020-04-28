function someRecursive(arr, callBack) {
  let odd = false;
  
  function helper(array, callBack) {
    if (array.length === 0) return;
    odd = callBack(array[0]);
    if (odd) return;
    helper(array.slice(1), callBack);
  }

  helper(arr, callBack);
  return odd;
}

const isOdd = val => val % 2 !== 0;
console.log(someRecursive([4, 6, 8], isOdd));