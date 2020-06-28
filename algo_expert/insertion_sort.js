const insertionSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
};

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));