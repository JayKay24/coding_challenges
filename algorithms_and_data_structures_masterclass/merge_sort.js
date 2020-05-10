function mergeSort(array) {
  if (array.length <= 1) return array;
  let middle = Math.floor(array.length / 2);
  let firstHalf = mergeSort(array.slice(0, middle));
  let secondHalf = mergeSort(array.slice(middle));
  return merge(firstHalf, secondHalf);
}


function merge(array1, array2) {
  let sortedArr = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length){
    if (array1[i] < array2[j]) {
      sortedArr.push(array1[i]);
      i++;
    } else {
      sortedArr.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    sortedArr.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    sortedArr.push(array2[j]);
    j++;
  }

  return sortedArr;
}

console.log(mergeSort([2, 14, 1, 99, 50, 100, 10]));