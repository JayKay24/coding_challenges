function sameFrequency(int1, int2) {
  const str1 = int1.toString();
  const str2 = int2.toString();

  if (str1.length !== str2.length) return false;

  const freqCounter1 = {};
  const freqCounter2 = {};

  for (let char of str1) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1;
  }

  for (let char of str2) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }

  for(const key in freqCounter1) {
    if (freqCounter1[key] !== freqCounter2[key]) return false;
  }

  return true;
}

console.log(sameFrequency(221, 222));