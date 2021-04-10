const binarySearch = (
  arr: number[],
  target: number,
  left: number = 0,
  right: number = arr.length - 1
) => {
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
};

function searchRange(nums: number[], target: number): number[] {
  if (!nums.length) return [-1, -1];
  const result: [number, number] = [-1, -1];
  let midIdx = binarySearch(nums, target);

  if (midIdx > -1) {
    while (true) {
      if (result[0] > -1 && result[1] > -1) break;

      if (nums[midIdx - 1] === target && nums[midIdx + 1] === target) {
        if (result[0] > -1) {
          midIdx = binarySearch(nums, target, midIdx + 1);
        } else {
          midIdx = binarySearch(nums, target, 0, midIdx - 1);
        }
      } else if (nums[midIdx - 1] !== target && nums[midIdx] === target) {
        result[0] = midIdx;
        midIdx = binarySearch(
          nums,
          target,
          midIdx + 1,
          result[1] > -1 ? result[1] : nums.length - 1
        );
      } else if (nums[midIdx + 1] !== target && nums[midIdx] === target) {
        result[1] = midIdx;
        midIdx = binarySearch(
          nums,
          target,
          result[0] > -1 ? result[0] : 0,
          midIdx - 1
        );
      } else {
        break;
      }
    }
  }

  if (result[0] === -1 && result[1] > -1) {
    result[0] = result[1];
  } else if (result[1] === -1 && result[0] > -1) {
    result[1] = result[0];
  }

  return result;
}

console.log(searchRange([1, 2, 2, 3, 4, 4, 4], 4));
// console.log(searchRange([8], 8));
