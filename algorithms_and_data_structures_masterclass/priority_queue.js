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
      try {
        while (
          this.values[currentIndex].priority <
            this.values[Math.floor((currentIndex - 1) / 2)].priority &&
          currentIndex >= 1
        ) {
          this.swap(
            this.values,
            currentIndex,
            Math.floor((currentIndex - 1) / 2)
          );
          currentIndex = Math.floor((currentIndex - 1) / 2);
        }
      } catch (error) {
        console.log(error);
      }
    }
    return this.values;
  }

  swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  dequeue() {
    this.swap(this.values, 0, this.values.length - 1);
    const oldRoot = this.values.pop();

    let parentIndex = 0;
    while (true) {
      let leftChildIndex = 2 * parentIndex + 1;
      let rightChildIndex = 2 * parentIndex + 2;
      let maxPriority = null;
      let currentIndex = null;
      if (leftChildIndex < this.values.length) {
        if (rightChildIndex < this.values.length) {
          maxPriority = Math.min(
            this.values[leftChildIndex].priority,
            this.values[rightChildIndex].priority
          );
          currentIndex =
            maxPriority === this.values[leftChildIndex]
              ? leftChildIndex
              : rightChildIndex;
          this.swap(this.values, parentIndex, currentIndex);
          parentIndex = currentIndex;
        } else {
          currentIndex = leftChildIndex;
          this.swap(this.values, parentIndex, currentIndex);
          parentIndex = currentIndex;
        }
      } else {
        break;
      }
    }
    return oldRoot;
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Jimmy", 3);
priorityQueue.enqueue("Ruth", 2);
priorityQueue.enqueue("Our Child", 1);
console.log("");
