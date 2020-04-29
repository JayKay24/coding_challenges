function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  let str = arr[0];
  str = str.charAt(0).toUpperCase() + str.slice(1); 
  return [str].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));