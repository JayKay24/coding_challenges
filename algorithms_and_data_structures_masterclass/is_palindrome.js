function isPalindrome(str) {
  let finalStr = '';

  function helper(strn) {
    if (strn.length === 0) return;
    finalStr += strn.slice(-1);
    helper(strn.slice(0, -1));
  }

  helper(str);
  
  return str === finalStr;
}

console.log(isPalindrome('foobar'));