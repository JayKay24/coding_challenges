function merge(array1, array2) {
  let sortedArr = [];
  let i = 0;
  let j = 0;

  while (true){
    if (array1[i] === undefined) {
      sortedArr = sortedArr.concat(array2.slice(j));
      break;
    } else if (array2[j] === undefined) {
      sortedArr = sortedArr.concat(array1.slice(i));
      break;
    }
    if (array1[i] < array2[j]) {
      sortedArr.push(array1[i]);
      i++;
    } else {
      sortedArr.push(array2[j]);
      j++;
    }
  }

  return sortedArr;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));