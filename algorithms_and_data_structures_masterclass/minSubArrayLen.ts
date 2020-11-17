export const minSubArrayLen = (arr: number[], target: number) => {
  let winStart = 0,
    minWindowLength = Infinity,
    winEnd = 1,
    currentMin = arr[winStart],
    windowSum = currentMin;

  while (winEnd < arr.length) {
    if (windowSum === target) {
      break;
    }
    windowSum += arr[winEnd];

    while (windowSum >= target) {
      windowSum -= arr[winStart];
      minWindowLength = Math.min(minWindowLength, winEnd - winStart + 1);
      winStart++;
    }

    minWindowLength = Math.min(minWindowLength, winEnd - winStart + 1);

    winEnd++;
  }

  return minWindowLength;
};

let res = minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52);
console.log(res);
