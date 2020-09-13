type strOrNum = number | string;

export class Node {
  next: Node = null;
  constructor(public value: strOrNum) {
    this.value = value;
  }
}

export class Queue {
  first: Node = null;
  last: Node = null;
  length: number;

  constructor() {
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value: strOrNum) {
    const newNode = new Node(value);
    if (!this.last || this.length === 0) {
      this.last = newNode;
      this.first = this.last;
    } else {
      newNode.next = this.last;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    // TODO: re-write this entire block
    let currentNode = this.last;
    let currentLast: Node = null;

    while (currentNode) {
      if (!currentNode.next.next) {
        this.first = currentNode;
        currentLast = this.first.next;
        break;
      }
      currentNode = currentNode.next;
    }

    this.length--;
    return currentLast;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.dequeue();
console.log(myQueue);
