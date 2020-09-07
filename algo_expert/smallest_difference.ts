export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  let smallestDifference = Infinity;
  let pairWithSmallestAbsDiff: number[] = [];

  const sortFn = (a: number, b: number) => (a < b ? -1 : a > b ? 1 : 0);
  arrayOne.sort(sortFn);
  arrayTwo.sort(sortFn);

  let p1 = 0;
  let p2 = 0;

  while (p1 < arrayOne.length && p2 < arrayTwo.length) {
    let firstNum = arrayOne[p1];
    let secondNum = arrayTwo[p2];
    let currAbsVal: number;
    if (firstNum < secondNum) {
      currAbsVal = secondNum - firstNum;
      p1++;
    } else if (firstNum > secondNum) {
      currAbsVal = firstNum - secondNum;
      p2++;
    } else {
      pairWithSmallestAbsDiff = [firstNum, secondNum];
      return pairWithSmallestAbsDiff;
    }

    if (currAbsVal < smallestDifference) {
      smallestDifference = currAbsVal;
      pairWithSmallestAbsDiff = [firstNum, secondNum];
    }
  }

  return pairWithSmallestAbsDiff;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
