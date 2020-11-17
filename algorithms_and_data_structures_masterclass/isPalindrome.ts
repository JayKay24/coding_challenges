export const isPalindrome = (str: string): boolean => {
  if (str.length <= 1) return true;
  let valid = str[0] === str[str.length - 1];

  let slicedStr = str.slice(1, -1);

  return valid && isPalindrome(slicedStr);
};

let res = isPalindrome("aaaa");
console.log(res);
