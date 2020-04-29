function capitalizeWords(arr) {
  if (arr.length === 0) return [];
  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));