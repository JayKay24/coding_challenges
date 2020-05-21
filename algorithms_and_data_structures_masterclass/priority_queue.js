class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}
/**
 * This is a Priority Queue implemented with a MinBinaryHeap
 */
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    if (this.values.length > 1) {
      let currentIndex = this.values.length - 1;
      while (
        this.values[Math.floor((currentIndex - 1) / 2)].priority <
          this.values[currentIndex].priority &&
        currentIndex >= 1
      ) {
        this.swap(
          this.values,
          currentIndex,
          Math.floor((currentIndex - 1) / 2)
        );
        currentIndex = Math.floor((currentIndex - 1) / 2);
      }
    }
    return this.values;
  }

  swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  dequeue() {}
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('Jimmy', 3);
priorityQueue.enqueue('Ruth', 2);
priorityQueue.enqueue('Our Child', 1);
console.log('');
