export const isSubsequence = (str1: string, str2: string) => {
  let str1Pointer = 0,
    str2Pointer = 0;

  while (str2Pointer < str1.length) {
    if (str1Pointer === str1.length - 1) return true;
    if (str1[str2Pointer] === str2[str1Pointer]) {
      str1Pointer++;
    }
    str2Pointer++;
  }

  return false;
};

let res = isSubsequence("abc", "acb");
console.log(res);
