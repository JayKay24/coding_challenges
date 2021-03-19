function isPalindrome(s: string): boolean {
  const transform = (s: string) => s.replace(/[^A-Za-z0-9]/g, "");

  let transformedS = transform(s);
  transformedS = transformedS.toLowerCase();
  let left = 0,
    right = transformedS.length - 1,
    sLength = transformedS.length;

  while (left <= right) {
    if (sLength % 2 === 0) {
      if (right - left === 1 && transformedS[left] !== transformedS[right]) {
        return false;
      } else if (transformedS[left] !== transformedS[right]) {
        return false;
      }
    } else {
      if (transformedS[left] !== transformedS[right]) {
        return false;
      }
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
