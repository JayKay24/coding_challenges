const maxProfit = (prices) => {
  let winStart = 0,
    maximumProfit = 0;

  for (let winEnd = winStart + 1; winEnd < prices.length; winEnd++) {
    if (prices[winEnd] > prices[winStart]) {
      maximumProfit += prices[winEnd] - prices[winStart];
    }
    winStart += 1;
  }

  return maximumProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 3, 6, 3, 6]));
