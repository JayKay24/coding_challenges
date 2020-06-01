function smallestSubArray(array, num) {
  let winSum = 0;
  let winStart = 0;
  let minAbs = Infinity;
  let smallestArr = array.length;
  let currentArr = [];

  for (let winEnd = 0; winEnd < array.length; winEnd++) {
    currentArr = array.slice(winStart, winEnd + 1);
    winSum += array[winEnd];
    if (winSum === num) {
      smallestArr = array.slice(winStart, winEnd + 1);
      break;
    }

    if (winSum > num) {
      // let currentAbs = Math.abs(num - winSum);
      if (currentArr.length < smallestArr) {
        smallestArr = array.slice(winStart, winEnd + 1).length;
        winSum -= array[winStart];
        winStart++;
      }
      // if (currentAbs < minAbs) {
      //   smallestArr = array.slice(winStart, winEnd + 1);
      //   minAbs = currentAbs;
      //   winSum -= array[winStart];
      // }
      // winSum -= array[winStart];
      // winStart++;
    }
  }
  return smallestArr;
}

console.log(smallestSubArray([2, 1, 5, 2, 3, 2], 7));