function checkPermutation(str1, str2) {
  if (str1.length === str2.length) {
    let str1Arr = str1.split('');
    let str2Arr = str2.split('');
    str1Arr.sort();
    str2Arr.sort();
    return str1Arr.join('') === str2Arr.join('');
  }
  return false;
}

console.log(checkPermutation('asd', 'asd'));