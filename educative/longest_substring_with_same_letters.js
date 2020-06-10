const lengthOfLongestSubstring = (str, k) => {
  let winStart = 0,
    mostFreqLetterInWindow = "",
    windowLettersFreq = {},
    winStr = "";

  for (let winEnd = 0; winEnd < str.length; winEnd++) {
    winStr += str[winEnd];
    if (windowLettersFreq[str[winEnd]]) {
      windowLettersFreq[str[winEnd]]++;
    } else {
      windowLettersFreq[str[winEnd]] = 1;
    }

    let replacementsLeft = k;

    // while (winStr.length > k) {
    while (replacementsLeft) {
      let currentMax = 0,
        replaceableWindow = winStr;

      for (const [key, value] of windowLettersFreq) {
        if (value > currentMax) {
          mostFreqLetterInWindow = key;
          currentMax = value;
        }
      }

      for (let i = 0; i < replaceableWindow.length && replacementsLeft; i++) {
        if (replaceableWindow[i] !== mostFreqLetterInWindow) {
          replaceableWindow =
            replaceableWindow.slice(0, i) +
            mostFreqLetterInWindow +
            replaceableWindow.slice(i + 1);
          replacementsLeft--;
        }
      }
    }
  }
};

console.log(lengthOfLongestSubstring("abbcb", 3));
