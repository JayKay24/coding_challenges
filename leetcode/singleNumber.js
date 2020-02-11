/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.

  Note:

  Your algorithm should have a linear runtime complexity. Could you implement it without using extra
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  nums.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) return nums[i];
    i++;
  }
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
