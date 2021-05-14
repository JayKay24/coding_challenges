type ComparatorFn = (a: number, b: number) => boolean;

export class PriorityQueue {
  private heap: number[] = [];
  constructor(private comparator: ComparatorFn = (a, b) => a > b) {}

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  peek(): number {
    return this.heap[0];
  }

  push(val: number) {
    this.heap.push(val);
    this.siftUp();
    return this.size();
  }

  pop() {
    this.heap.shift();
    this.size() > 0 ? this.heap.unshift(this.heap.pop()) : null;
    this.size() > 0 ? this.siftDown() : null;
    return this.size();
  }

  private siftDown() {
    let parentIdx = 0,
      parent = this.heap[parentIdx],
      leftChildIdx = this.getLeftChildIdx(parentIdx),
      rightChildIdx = this.getRightChildIdx(parentIdx),
      leftChild = this.heap[leftChildIdx],
      rightChild = this.heap[rightChildIdx];

    while (true) {
      if (this.comparator(leftChild, parent)) {
        this.swap(parentIdx, leftChildIdx);
        parentIdx = leftChildIdx;
      } else if (this.comparator(rightChild, parent)) {
        this.swap(parentIdx, rightChildIdx);
        parentIdx = rightChildIdx;
      } else {
        break;
      }
      parent = this.heap[parentIdx];
      leftChildIdx = this.getLeftChildIdx(parentIdx);
      rightChildIdx = this.getRightChildIdx(parentIdx);
      leftChild = this.heap[leftChildIdx];
      rightChild = this.heap[rightChildIdx];
    }
  }

  private siftUp() {
    let childIdx = this.size() - 1,
      parentIdx = this.getParentIdx(childIdx),
      child = this.heap[childIdx],
      parent = this.heap[parentIdx];

    while (true) {
      if (this.comparator(child, parent)) {
        this.swap(parentIdx, childIdx);
        childIdx = parentIdx;
      } else {
        break;
      }

      parentIdx = this.getParentIdx(childIdx);
      child = this.heap[childIdx];
      parent = this.heap[parentIdx];
    }
  }

  private getRightChildIdx(idx: number) {
    return idx * 2 + 2;
  }

  private getLeftChildIdx(idx: number) {
    return idx * 2 + 1;
  }

  private getParentIdx(idx: number) {
    return Math.floor((idx - 1) / 2);
  }

  private swap(idx1: number, idx2: number) {
    [this.heap[idx2], this.heap[idx1]] = [this.heap[idx1], this.heap[idx2]];
  }
}

export class Node {
  routes: Map<number, number>;

  constructor(public label: number) {
    this.routes = new Map();
  }

  addRoute(node: number, timeTaken: number) {
    this.routes.set(node, timeTaken);
  }
}

// function networkDelayTime(times: number[][], n: number, k: number): number { // Dijkstra
//   const cheapestTimeTable: Map<number, number> = new Map();
//   const cheapestPreviousStopoverNodeTable: Map<number, number> = new Map();
//   const adjacencyList: Map<number, Node> = new Map();
//   const unvisitedNodes: PriorityQueue = new PriorityQueue((a, b) => a < b);
//   const visitedNodes: Map<number, boolean> = new Map();
//   let startingNode: Node = new Node(-1);

//   for (const time of times) {
//     const [source, target, timeTaken] = time;
//     let sourceNode = new Node(source);
//     if (!adjacencyList.has(target)) {
//       adjacencyList.set(target, new Node(target));
//     }
//     if (adjacencyList.has(sourceNode.label)) {
//       adjacencyList.get(sourceNode.label).addRoute(target, timeTaken);
//       sourceNode = adjacencyList.get(sourceNode.label);
//     } else {
//       sourceNode.addRoute(target, timeTaken);
//     }

//     adjacencyList.set(sourceNode.label, sourceNode);

//     cheapestTimeTable.set(sourceNode.label, Infinity);
//     cheapestTimeTable.set(target, Infinity);
//     if (k === sourceNode.label) {
//       startingNode = sourceNode;
//     }
//   }

//   let currentNode: Node | null = startingNode;
//   unvisitedNodes.push(currentNode.label);

//   cheapestTimeTable.set(startingNode.label, 0);

//   while (currentNode) {
//     visitedNodes.set(currentNode.label, true);
//     unvisitedNodes.pop();

//     for (const [adjacentNode, timeTaken] of currentNode.routes.entries()) {
//       if (!visitedNodes.has(adjacentNode)) {
//         unvisitedNodes.push(adjacentNode);
//       }

//       const timeTakenThroughCurrentNode =
//         cheapestTimeTable.get(currentNode.label) + timeTaken;

//       if (
//         !cheapestTimeTable.has(adjacentNode) ||
//         timeTakenThroughCurrentNode < cheapestTimeTable.get(adjacentNode)
//       ) {
//         cheapestTimeTable.set(adjacentNode, timeTakenThroughCurrentNode);
//         cheapestPreviousStopoverNodeTable.set(adjacentNode, currentNode.label);
//       }
//     }

//     currentNode = adjacencyList.get(unvisitedNodes.peek());
//   }

//   let totalTimeTakenToReachSignal = (function (): number {
//     let currentMax = -Infinity;
//     for (const timeTaken of cheapestTimeTable.values()) {
//       if (timeTaken > currentMax) {
//         currentMax = timeTaken;
//       }
//     }

//     return currentMax;
//   })();

//   return totalTimeTakenToReachSignal === Infinity
//     ? -1
//     : totalTimeTakenToReachSignal;
// }

export function networkDelayTime(times: number[][], n: number, k: number) { // Bellman-Ford
  const distances = new Array(n).fill(Infinity);
  distances[k - 1] = 0;

  for (let i = 0; i < n - 1; i++) {
    let count = 0;
    for (let j = 0; j < times.length; j++) {
      const [source, target, weight] = times[j];
      const timeTakenToTarget = distances[source - 1] + weight;
      if (timeTakenToTarget < distances[target - 1]) {
        distances[target - 1] = timeTakenToTarget;
        count++;
      }
    }

    if (count === 0) break;
  }

  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
}

export const times = [
  [1, 2, 1],
  [2, 3, 2],
  [1, 3, 2],
];

console.log(networkDelayTime(times, 3, 1));
