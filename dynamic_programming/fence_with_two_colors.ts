/*
Problem:
	Paint Fence With Two Colors
	There is a fence with n posts, each post can be painted with either green or blue color.
	You have to paint all the posts such that no more than two adjacent fence posts have the same color.
	Return the total number of ways you can paint the fence.
*/

export const fenceWithTwoColors = (posts: number) => {
  const dp: number[][] = new Array(posts + 1).fill([]);

  // green = 1
  // blue = 0
  dp[1][0] = 1;
  dp[1][1] = 1;
  dp[2][0] = 2;
  dp[2][1] = 2;
  return dp;
};

let res = fenceWithTwoColors(3);
