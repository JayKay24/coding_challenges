function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) swap(arr, i, j);
    }
  }
  return arr;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

console.log(bubbleSort([3, 2, 6, 9, 8, 7, 5, 1, 4]));