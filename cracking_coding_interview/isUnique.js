function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    let current = i;
    for (let j = current + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
      current++;
    }
  }
  return true;
}

console.log(isUnique('jamesa'));