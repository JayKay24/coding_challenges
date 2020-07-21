const findSubarrays = (arr, target) => {
  let lessThanTarget = [],
    windowStart = 0;
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    let arrSlice = arr.slice(windowStart, windowEnd + 1);
    let result = arrSlice.reduce(reducer, 1);

    if (result < target) {
      let currentStart = 0;
      while (result < target && arrSlice.length) {
        arrSlice = arrSlice.slice(currentStart);
        arrSlice.length && lessThanTarget.push(arrSlice);
        currentStart++;
      }
    } else {
      while (arrSlice.length) {
        arrSlice = arrSlice.slice(1);
        arrSlice.length &&
          arrSlice.reduce(reducer) < target &&
          lessThanTarget.push(arrSlice);
      }
      windowStart++;
    }
  }

  return lessThanTarget;
};

console.log(findSubarrays([2, 5, 3, 10], 30));
console.log(findSubarrays([8, 2, 6, 5], 50));
