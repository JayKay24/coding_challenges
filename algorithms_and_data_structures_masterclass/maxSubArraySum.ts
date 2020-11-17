export const maxSubArraySum = (arr: number[], num: number): number | null => {
  if (num > arr.length) return null;
  let maxSum = 0,
    winStart = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  for (let winEnd = num; winEnd < arr.length; winEnd++) {
    if (winEnd - winStart + 1 >= num) {
      winStart++;
      let currentSum = maxSum - arr[winStart - 1] + arr[winEnd];
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
};

let res = maxSubArraySum([-3, 4, 0, -2, 6, -1], 2);
console.log(res);
