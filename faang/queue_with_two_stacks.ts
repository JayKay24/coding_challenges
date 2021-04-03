export class MyQueue {
  stack1: number[];
  stack2: number[];

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x: number): void {
    this.stack1.push(x);
  }

  pop(): number {
    if (this.stack2.length) {
      return this.stack2.pop();
    } else {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.pop();
    }
  }

  peek(): number {
    if (this.stack2.length) {
      return this.stack2[this.stack2.length - 1];
    } else {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2[this.stack2.length - 1];
    }
  }

  empty(): boolean {
    return !this.stack1.length && !this.stack2.length;
  }
}

const myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
