function pivot(
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1
): number {
  const swap = (arr: any[], idx1: number, idx2: number) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start],
    swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(
  arr: number[],
  left: number = 0,
  right: number = arr.length - 1
) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

function quickSelect(
  arr: number[],
  idxToFind: number,
  left: number = 0,
  right: number = arr.length - 1
) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    if (pivotIdx > idxToFind) {
      quickSelect(arr, idxToFind, left, pivotIdx - 1);
    } else if (pivotIdx < idxToFind) {
      quickSelect(arr, idxToFind, pivotIdx + 1, right);
    }
  }

  return arr;
}

function findKthLargest(nums: number[], k: number): number {
  const IdxToFind = nums.length - k;
  quickSelect(nums, IdxToFind);

  return nums[IdxToFind];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));

// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
