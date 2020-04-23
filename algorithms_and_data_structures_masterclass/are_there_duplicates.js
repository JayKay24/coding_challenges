function areThereDuplicates(...args) {
  const freqCounter = {};

  for (const val of args) {
    freqCounter[val] = (freqCounter[val] || 0) + 1;
    if (freqCounter[val] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));