const intersect = (nums1, nums2) => {
  let intersection = [],
    windowStart = 0;
  if (nums1.length < nums2.length) {
    for (let windowEnd = 0; windowEnd < nums2.length; windowEnd++) {
      if (windowEnd - windowStart + 1 === nums1.length) {
        let windowSlice = nums2.slice(windowStart, windowEnd + 1);
        for (let i = 0; i < windowSlice.length; i++) {
          if (nums1[i] === windowSlice[i]) intersection.push(windowSlice[i]);
        }
        windowStart++;
      }
    }
  } else {
    for (let windowEnd = 0; windowEnd < nums1.length; windowEnd++) {
      if (windowEnd - windowStart + 1 === nums2.length) {
        let windowSlice = nums1.slice(windowStart, windowEnd + 1);
        for (let i = 0; i < windowSlice.length; i++) {
          if (nums2[i] === windowSlice[i]) intersection.push(windowSlice[i]);
        }
        windowStart++;
      }
    }
  }

  return intersection;
};

let result = intersect([1, 2, 2, 1], [2, 2]);
// let result = intersect([4, 9, 5], [9, 4, 9, 8, 4]);
console.log(result);
