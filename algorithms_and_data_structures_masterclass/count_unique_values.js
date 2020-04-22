function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let comparison = 0;

  for (let scout = 1; scout < arr.length; scout++) {
    if (arr[comparison] !== arr[scout]) {
      comparison++;
      const temp = arr[scout];
      arr.splice(scout, 1);
      arr.splice(comparison, 0, temp);
    }
  }
  return comparison + 1;
}

console.log(countUniqueValues([1]));