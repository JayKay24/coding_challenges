export function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const adjList: Map<number, number[]> = new Map();
  const inDegrees: Map<number, number> = new Map();
  const topologicalOrder: number[] = [];

  for (let i = 0; i < numCourses; i++) {
    adjList.set(i, []);
    inDegrees.set(i, 0);
  }

  for (const prerequisite of prerequisites) {
    const [courseAfter, courseBefore] = prerequisite;
    adjList.set(courseBefore, [...adjList.get(courseBefore), courseAfter]);
    inDegrees.set(courseAfter, inDegrees.get(courseAfter) + 1);
  }

  let currentSize = inDegrees.size;

  while (inDegrees.size > 0) {
    const initialSize = inDegrees.size;
    for (const [key, val] of inDegrees.entries()) {
      if (inDegrees.get(key) === 0) {
        const neighbors = adjList.get(key);
        for (const neighbor of neighbors) {
          inDegrees.set(neighbor, inDegrees.get(neighbor) - 1);
        }
        topologicalOrder.push(key);
        inDegrees.delete(key);
        currentSize--;
      }
    }
    if (initialSize === currentSize) break;
  }

  return topologicalOrder.length === numCourses;
}

export const prerequisites = [
  [1, 0],
  [2, 1],
  [2, 5],
  [0, 3],
  [4, 3],
  [3, 5],
  [4, 5],
];

// export const prerequisites = [
//   [1, 0],
//   [0, 2],
//   [2, 1],
// ];
console.log(canFinish(6, prerequisites));
