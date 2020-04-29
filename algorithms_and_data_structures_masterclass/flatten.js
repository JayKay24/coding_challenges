function flatten(arr) {
  if (arr.length === 0) return [];
  // if (!arr[0] instanceof Array) return [arr[0]];
  return [arr[0]].concat(flatten(arr.slice(1)));
}

console.log(flatten([1, 2, 3, [4, 5]]), 'here');