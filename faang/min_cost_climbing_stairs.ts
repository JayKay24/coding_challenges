export function minCostClimbingStairs(cost: number[]): number {
  const costLength = cost.length;
  const subProblems = new Array(cost.length).fill(Infinity);
  return cost.length < 3
    ? Math.min(cost[0], cost[1])
    : Math.min(
        minCost(costLength - 1, cost, subProblems),
        minCost(costLength - 2, cost, subProblems)
      );
}

export function minCost(
  currentStep: number,
  cost: number[],
  subProblems: number[]
): number {
  if (currentStep < 0) return 0;
  if (currentStep === 0 || currentStep === 1) return cost[currentStep];
  if (subProblems[currentStep] === Infinity) {
    subProblems[currentStep] =
      cost[currentStep] +
      Math.min(
        minCost(currentStep - 1, cost, subProblems),
        minCost(currentStep - 2, cost, subProblems)
      );
  }

  return subProblems[currentStep];
}

export function minCostClimbingStairsTabulation(cost: number[]): number {
  if (cost.length < 3) {
    return Math.min(cost[0], cost[1]);
  }

  let oneStepBehindCost = cost[0],
    costUptoNow = cost[1],
    temp = oneStepBehindCost;

  for (let i = 2; i < cost.length; i++) {
    temp = costUptoNow;
    costUptoNow = cost[i] + Math.min(costUptoNow, oneStepBehindCost);
    oneStepBehindCost = temp;
  }

  return Math.min(oneStepBehindCost, costUptoNow);
}

export const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairsTabulation(cost));
