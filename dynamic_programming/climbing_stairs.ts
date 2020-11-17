/*
Problem:
	Climbing Stairs
	You are climbing a stair case. It takes n steps to reach to the top.
	Each time you can either climb 1 or 2 steps.
	In how many distinct ways can you climb to the top?
Framework for Solving DP Problems:
	1. Define the objective function
		f(i) is the number of distinct ways to reach the i-th stair.
	2. Identify base cases
		f(0) = 1
		f(1) = 1
	3. Write down a recurrence relation for the optimized objective function
		f(n) = f(n-1) + f(n-2)
	4. What's the order of execution?
		bottom-up
	5. Where to look for the answer?
		f(n)
*/

export const climbingStairs = (steps: number) => {
  const dp: number[] = new Array(steps);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= steps; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[dp.length - 1];
};

export const climbingStairsOptimal = (steps: number) => {
  let first = 1,
    second = 1,
    result: number;

  for (let i = 2; i <= steps; i++) {
    result = second + first;
    [first, second] = [second, result];
  }

  return result;
};

/*
  Problem:
    Climbing Stairs (k steps)
    You are climbing a stair case. It takes n steps to reach to the top.
    Each time you can climb 1..k steps.
    In how many distinct ways can you climb to the top?
  Framework for Solving DP Problems:
    1. Define the objective function
      f(i) is the number of distinct ways to reach the i-th stair by making 1 to k steps.
    2. Identify base cases
      f(0) = 1
      f(1) = 1
    3. Write down a recurrence relation for the optimized objective function
      f(n) = f(n-1) + f(n-2) + ... + f(n-k)
    4. What's the order of execution?
      bottom-up
    5. Where to look for the answer?
      f(n)
*/
export const climbingStairsKSteps = (steps: number, k: number) => {
  const dp = new Array(steps);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= steps; i++) {
    for (let j = 1; j <= k; j++) {
      if (i - j < 0) {
        continue;
      }
      dp[i] += dp[i - 1];
    }
  }

  return dp[steps];
};

let res = climbingStairsKSteps(5, 3);
console.log(res);
