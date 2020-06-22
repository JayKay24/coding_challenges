const removeElement = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      arr.splice(i, 1);
      i -= 1;
    }
  }
  
  return arr.length;
};

console.log(removeElement([3, 2, 3, 6, 3, 10, 9, 3], 3));
console.log(removeElement([2, 11, 2, 2, 1], 2));
