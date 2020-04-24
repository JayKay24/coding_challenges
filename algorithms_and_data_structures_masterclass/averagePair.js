function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if ((arr[left] + arr[right]) / 2 === avg) return true;
    if ((arr[left] + arr[right]) / 2 > avg) right--;
    if ((arr[left] + arr[right]) / 2 < avg) left++;
  }
  
  return false;
}

console.log(averagePair([1,2,3], 2.5));