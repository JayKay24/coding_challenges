export const averagePair = (arr: number[], target: number) => {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let currentAvg = (arr[left] + arr[right]) / 2;
    if (currentAvg === target) return true;
    if (currentAvg < target) left++;
    if (currentAvg > target) right--;
  }

  return false;
};

let res = averagePair([-1, 0, 3, 4, 5, 6], 4.1);
console.log(res);
