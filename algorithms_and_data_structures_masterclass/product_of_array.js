function productOfArray(arr) {
  let result = 1;

  function product(array) {
    if (array.length === 0) return;
    result *= array[0];
    product(array.slice(1));
  }

  product(arr);

  return result;
}

console.log(productOfArray([1, 2, 3]));