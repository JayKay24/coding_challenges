const twoSum = (nums, target) => {

  if (nums.length === 1) return [0];
  if (nums.length === 2) return [0, 1];
  if (nums.length > 2) {
    const initialNums = nums.concat([]);

    const newNums = initialNums.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    let startPointer = 0;
    let endPointer = newNums.length - 1;

    while (startPointer < endPointer) {
      let currentSum = newNums[startPointer] + newNums[endPointer];

      if (currentSum === target) break;
      if (currentSum > target) endPointer--;
      if (currentSum < target) startPointer++;
    }

    const finalNums = [];
    const visited = {};

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === newNums[startPointer] && !visited[i]) {
        finalNums.push(i);
        visited[i] = true;
      }
      if (nums[i] === newNums[endPointer] && !visited[i]) {
        finalNums.push(i);
        visited[i] = true;
      }
    }

    return finalNums;
  }
};

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 2, 3], 6));
