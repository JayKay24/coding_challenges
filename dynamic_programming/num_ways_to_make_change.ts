/*
Problem:
	Coin change
	Given an unlimited supply of coins of given denominations,
	find the total number of ways to make a change of size n.
	Transition function: f(n) = f(n-d_1) + f(n-d_2) + f(n-d_3) + ... + f(n-d_k),
	where d_1, d_2, d_3, ..., d_k are provided coin denomations.
*/

export const makeChange = (totalAmount: number, coins: number[]) => {
  const dp: number[] = new Array(totalAmount + 1).fill(0);
  dp[0] = 1;

  for (let amount = 1; amount <= totalAmount; amount++) {
    for (const coin of coins) {
      let change = amount - coin;
      if (change >= 0) {
        dp[amount] += dp[change];
      }
    }
  }

  return dp[totalAmount];
};

let res = makeChange(3, [1, 3, 5, 10]);
console.log(res);
