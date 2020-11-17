export function sameFrequency(int1: number, int2: number) {
  const int1Str = int1.toString(),
    int2Str = int2.toString(),
    int1Map = new Map();

  for (const char of int1Str) {
    let freq = int1Map.get(char);
    if (!freq) {
      int1Map.set(char, 1);
    } else {
      freq++;
      int1Map.set(char, freq);
    }
  }

  for (const char of int2Str) {
    let freq = int1Map.get(char);
    if (!freq) {
      return false;
    } else {
      freq--;
      int1Map.set(char, freq);
    }
  }

  return true;
}

let res = sameFrequency(182, 282);
console.log(res);
