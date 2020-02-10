/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (str) => {
  if (str.length > 1) {
    let remainingSteps = str.length;
    for (let i = 0; i < remainingSteps; i++) {
      let currentChar = str[i];
      let lastChar = str[remainingSteps - 1];
      str[i] = lastChar;
      str[remainingSteps - 1] = currentChar;
      remainingSteps--;
    }
  }
};

reverseString(["h","e","l","l","o"]);
reverseString(["H","a","n","n","a","h"])