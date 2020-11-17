/*
Problem:
	Paid Staircase
	You are climbing a paid staircase. It takes n steps to reach to the top and you have to
	pay p[i] to step on the i-th stair. Each time you can climb 1 or 2 steps.
	What's the cheapest amount you have to pay to get to the top of the staircase?
*/

export const paidStairCase = (steps: number, p: number[]) => {
  const dp: number[] = new Array(steps + 1);
  dp[0] = p[0];
  dp[1] = p[1];

  for (let i = 2; i <= steps; i++) {
    dp[i] = Math.min(dp[i - 1] + p[i], dp[i - 2] + p[i]);
  }

  return dp[steps];
};

let res = paidStairCase(3, [0, 3, 2, 4]);
console.log(res);
