// function maxArea(height: number[]): number {
//   if (height.length < 2) return 0;

//   let maximumArea = -Infinity;

//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       let current = Math.min(height[i], height[j]) * (j - i);
//       maximumArea = Math.max(maximumArea, current);
//     }
//   }

//   return maximumArea;
// }

function maxArea(heights: number[]): number {
  let p1 = 0,
    p2 = heights.length - 1,
    maximumArea = 0;

  while (p1 < p2) {
    maximumArea = Math.max(
      Math.min(heights[p1], heights[p2]) * (p2 - p1),
      maximumArea
    );

    if (heights[p1] < heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maximumArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
