const rotate = (nums, k) => {
  let startIndex = nums.length - k;
  const oldLength = nums.length;
  nums.unshift(...nums.slice(Math.abs(startIndex)));

  nums.splice(oldLength, nums.length);

  return nums;
};

// const rotate = (nums, k) => {
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums[nums.length - 1]);
//     nums.pop();
//   }

//   return nums;
// };

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate([-1, -100, 3, 99], 2));
// console.log(rotate([-1], 2));
// console.log(rotate([1, 2], 3));
// console.log([-1], 2);
console.log(rotate([1, 2, 3], 4));