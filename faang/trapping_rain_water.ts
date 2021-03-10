// function trap(height: number[]): number {
//   let total = 0;
//   for (let i = 0; i < height.length; i++) {
//     let maxL = 0,
//       maxR = 0,
//       l = i - 1,
//       r = i + 1;
//     while (l >= 0 || r < height.length) {
//       if (l >= 0) {
//         maxL = Math.max(maxL, height[l]);
//       }

//       if (r < height.length) {
//         maxR = Math.max(maxR, height[r]);
//       }

//       l--;
//       r++;
//     }
//     let currentW = Math.min(maxL, maxR) - height[i];
//     if (currentW >= 0) {
//       total += currentW;
//     }
//   }

//   return total;
// }

function trap(height: number[]): number {
  let totalW = 0,
    maxL = 0,
    maxR = 0,
    left = 0,
    right = height.length - 1;
  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] < maxL) {
        totalW += maxL - height[left];
      } else {
        maxL = height[left];
      }

      left++;
    } else {
      if (height[right] < maxR) {
        totalW += maxR - height[right];
      } else {
        maxR = height[right];
      }

      right--;
    }
  }

  return totalW;
}

console.log(trap([4, 2, 0, 3, 2, 5]));
