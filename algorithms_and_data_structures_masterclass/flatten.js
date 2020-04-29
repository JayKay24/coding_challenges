function flatten(arr) {
  let flattenedArr = [];

  function flattenHelper(array) {
    if (array.length === 0) return;
    if (array[0] instanceof Array) {
      flattenHelper(array[0]);
    } else {
      flattenedArr.push(array[0]);
    }
    flattenHelper(array.slice(1));
  }

  flattenHelper(arr);

  return flattenedArr;
}

const final = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);
console.log(final);