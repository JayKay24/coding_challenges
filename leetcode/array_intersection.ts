const intersect = (nums1: number[], nums2: number[]): number[] => {
  const intersection = <number[]>[];
  const intersectionFinder = (
    firstArr: number[],
    secondArr: number[]
  ): void => {
    let currentPointer = 0,
      visited: { [prop: number]: boolean } = {};

    for (const num of secondArr) {
      if (currentPointer === firstArr.length) break;
      if (num === firstArr[currentPointer]) {
        intersection.push(num);
        currentPointer++;
      } else {
        if (firstArr[currentPointer] in visited) {
          intersection.push(firstArr[currentPointer]);
          delete visited[firstArr[currentPointer]];
          currentPointer++;
        } else {
          visited[num] = true;
        }
      }
    }
  };

  if (nums1.length < nums2.length) {
    intersectionFinder(nums1, nums2);
  } else if (nums1.length > nums2.length) {
    intersectionFinder(nums2, nums1);
  } else {
    let visited: { [prop: number]: number } = {};
    for (const num of nums1) {
      visited[num] ? visited[num]++ : (visited[num] = 1);
    }
    for (const num of nums2) {
      if (visited[num] >= 1) {
        intersection.push(num);
        visited[num]--;
      }
    }
  }
  return intersection;
};

// let res = intersect([1, 2, 2, 1], [2, 2]);
// let res = intersect([4, 9, 5], [9, 4, 9, 8, 4]);
let res = intersect([1, 2], [1, 1]);
console.log(res);
