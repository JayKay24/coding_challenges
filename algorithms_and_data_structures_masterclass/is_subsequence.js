function isSubsequence(str1, str2) {
  let str1Pointer = 0;
  
  for (let char of str2) {
    if (str1[str1Pointer] === char) {
      str1Pointer++;
    }
    if (str1.length - str1Pointer === 1) return true;
  }

  return false;
}

console.log(isSubsequence('sing', 'sting'));