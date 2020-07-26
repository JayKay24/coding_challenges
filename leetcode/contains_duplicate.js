const containsDuplicate = (nums) => {
  let left = 0,
    right = nums.length - 1,
    visited = {};

  while (left < right) {
    if (nums[left] in visited || nums[right] in visited) return true;
    if (nums[left] === nums[right]) return true;
    !(nums[left] in visited) && (visited[nums[left]] = true);
    !(nums[right] in visited) && (visited[nums[right]] = true);
    left++;
    right--;
  }

  return false;
};

let result = containsDuplicate([1, 2, 3, 1]);
// result = containsDuplicate([1, 2, 3, 4]);
result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
console.log(result);
