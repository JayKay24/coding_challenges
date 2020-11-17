export function validAnagram(str1: string, str2: string) {
  if (str1.length !== str2.length) return false;

  const str1Occur = new Map(),
    str2Occur = new Map();

  for (const char of str1) {
    let numTimes = str1Occur.get(char);
    if (!numTimes) {
      str1Occur.set(char, 1);
    } else {
      numTimes++;
      str1Occur.set(char, numTimes);
    }
  }

  for (const char of str2) {
    let numTimes = str2Occur.get(char);
    if (!numTimes) {
      str2Occur.set(char, 1);
    } else {
      numTimes++;
      str2Occur.set(char, numTimes);
    }
  }

  for (const [char, freq] of str1Occur) {
    let numTimes = str2Occur.get(char);
    if (!numTimes) {
      return false;
    }

    if (numTimes !== freq) {
      return false;
    }
  }

  return true;
}

let res = validAnagram("aaz", "zza");
console.log(res);
