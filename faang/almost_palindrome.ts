export const isPalindrome = (s: string, left: number, right: number) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

function validPalindrome(s: string): boolean {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }

    left++;
    right--;
  }

  return true;
}

console.log(validPalindrome("abca"));
