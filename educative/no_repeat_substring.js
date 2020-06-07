const noRepeatSubstring = (str) => {
  let maxSum = 0,
    windowString = "";

  for (let winEnd = 0; winEnd < str.length; winEnd++) {
    if (str[winEnd] === windowString[windowString.length - 1]) {
      windowString += str[winEnd];

      while (windowString.length > 1) {
        windowString = windowString.slice(1);
      }
    } else {
      windowString += str[winEnd];
      maxSum = Math.max(maxSum, windowString.length);
    }
  }

  return maxSum;
};

console.log(noRepeatSubstring("aabccbb"));
console.log(noRepeatSubstring("abbbb"));
console.log(noRepeatSubstring("abccde"));
