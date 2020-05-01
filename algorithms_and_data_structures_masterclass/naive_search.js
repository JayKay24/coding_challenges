function naiveSearch(longStr, subStr) {
  let count = 0;

  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (subStr[j] !== longStr[i + j]) break;
      if (j === subStr.length - 1) count++;
    }
  }

  return count;
}

console.log(naiveSearch('wowomgogmomomg', 'omg'));