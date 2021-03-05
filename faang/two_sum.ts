function twoSum(nums: number[], target: number): number[] {
  const numsToFind = new Map();
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (numsToFind.has(nums[i])) {
      result = [numsToFind.get(nums[i]), i];
      break;
    }
    numsToFind.set(target - nums[i], i);
  }

  return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
