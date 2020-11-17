export class Queue<T> {
  public stackOldestOnTop: T[];
  public stackNewestOnTop: T[];

  constructor() {
    this.stackOldestOnTop = [];
    this.stackNewestOnTop = [];
  }

  enqueue(val: T) {
    this.stackNewestOnTop.push(val);
  }

  dequeue() {
    this.shiftStackItems();
    return this.stackOldestOnTop.pop();
  }

  private shiftStackItems() {
    while (this.stackNewestOnTop.length > 0) {
      this.stackOldestOnTop.push(this.stackNewestOnTop.pop());
    }
  }

  peek(): T {
    this.shiftStackItems();
    return this.stackOldestOnTop[this.stackOldestOnTop.length - 1];
  }
}

let queue = new Queue<number>();
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(6);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue);
