function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (const char of str1) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1;
  }

  for (const char of str2) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }

  for (var key in freqCounter1) {
    if (freqCounter2[key] !== freqCounter1[key]) return false;
  }
  return true;
}

console.log(validAnagram('james', 'semmj'));