export function longestPalindromicSubstring(string: string) {
  const findLongest = (left: number, right: number) => {
    let subStr = "";
    while (left >= 0 && right < string.length) {
      if (string[left] === string[right]) {
        subStr = string.slice(left, right + 1);
      } else {
        break;
      }
      left--;
      right++;
    }
    return subStr;
  };

  let longestPalindrome = "";

  for (let i = 0; i < string.length; i++) {
    let oddStr = findLongest(i, i),
      evenStr = findLongest(i, i + 1);

    if (longestPalindrome.length < oddStr.length) {
      longestPalindrome = oddStr;
    }

    if (longestPalindrome.length < evenStr.length) {
      longestPalindrome = evenStr;
    }
  }

  return longestPalindrome;
}

let res = longestPalindromicSubstring("it's highnoon");
console.log(res);
