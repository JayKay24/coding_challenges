function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimum]) {
        minimum = j;
      }
    }
    if (i !== minimum) swap(array, i, minimum);
  }
  return array;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

console.log(selectionSort([3, 2, 6, 9, 8, 7, 5, 1, 4]));