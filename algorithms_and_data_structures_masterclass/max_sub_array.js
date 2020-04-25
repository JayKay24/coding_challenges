function maxSubArraySum(arr, subArrLen) {
  if (arr.length < subArrLen) return null;
  let max = 0;
  for (let i = 0; i < subArrLen; i++) {
    max += arr[i];
  }
  let temp = max;

  for (let i = subArrLen; i < arr.length; i++) {
    temp = temp - arr[i - subArrLen] + arr[i];
    max = Math.max(max, temp);
  }
  return max;
}

console.log(maxSubArraySum([100, 200, 300, 400], 2));