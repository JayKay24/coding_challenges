export function numOfMinutes(
  n: number,
  headID: number,
  managers: number[],
  informTime: number[]
): number {
  const adjList: number[][] = managers.map(() => []);

  for (let employee = 0; employee < n; employee++) {
    const manager = managers[employee];

    if (manager === -1) continue;

    adjList[manager].push(employee);
  }

  return dfs(headID, adjList, informTime);
}

export function dfs(
  currentID: number,
  adjList: number[][],
  informTime: number[]
): number {
  if (adjList[currentID].length === 0) return 0;

  let max = 0;

  const subordinates = adjList[currentID];
  for (let i = 0; i < subordinates.length; i++) {
    max = Math.max(max, dfs(subordinates[i], adjList, informTime));
  }

  return max + informTime[currentID];
}

export const managers: number[] = [2, 2, 4, 6, -1, 4, 4, 5],
  informTime: number[] = [0, 0, 4, 0, 7, 3, 6, 0];

console.log(numOfMinutes(8, 4, managers, informTime));
