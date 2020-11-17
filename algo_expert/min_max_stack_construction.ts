// Feel free to add new properties and methods to the class.
export class MinMaxStack {
  private doublyMin: Doubly;
  private doublyMax: Doubly;

  constructor() {
    this.doublyMin = new Doubly(Infinity);
    this.doublyMax = new Doubly(-Infinity);
  }

  private stack: number[] = [];

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.doublyMax.pop();
    this.doublyMin.pop();
    return this.stack.pop();
  }

  push(number: number) {
    if (number < this.doublyMin.peek()) {
      this.doublyMin.push(number);
    }

    if (number > this.doublyMax.peek()) {
      this.doublyMax.push(number);
    }

    this.stack.push(number);
  }

  getMin() {
    return this.doublyMin.peek();
  }

  getMax() {
    return this.doublyMax.peek();
  }
}

export class Node {
  public next: Node | null;
  public prev: Node | null;

  constructor(public val: number) {}
}

export class Doubly {
  public head: Node | null;
  public tail: Node | null;
  private default: number;
  private length: number = 0;

  constructor(val: number) {
    this.default = val;
    this.push(this.default);
  }

  push(val: number) {
    const newNode = new Node(val);
    if (
      (!this.head && !this.tail) ||
      this.head.val === Infinity ||
      this.head.val === -Infinity
    ) {
      this.head = newNode;
      this.head.prev = null;
      this.tail = newNode;
      this.head.next = this.tail;
      this.tail.next = null;
      this.tail.prev = this.head;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }

    this.length++;
  }

  shift() {
    if (this.length <= 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      this.push(this.default);
      return;
    } else {
      let newHead = this.head.next;
      if (newHead) newHead.prev = null;
      this.head.next = null;
      this.head.prev = null;
      if (newHead) this.head = newHead;
    }
    this.length--;
  }

  pop() {
    if (this.length <= 1) {
      this.shift();
    } else {
      if (this.tail) {
        let removedNode = this.tail;
        if (removedNode && removedNode.prev) {
          this.tail = removedNode.prev;
          this.tail.next = null;
          removedNode.prev = null;
          removedNode.next = null;
          return removedNode.val;
        }
      }
    }
  }

  peek() {
    if (this.tail) {
      return this.tail.val;
    } else {
      return this.default;
    }
  }
}

let stack = new MinMaxStack();
stack.push(2);
console.log(stack.getMin());
console.log(stack.getMax());
console.log(stack.peek());
stack.push(7);
console.log(stack.getMin());
console.log(stack.getMax());
console.log(stack.peek());
stack.push(1);
console.log(stack.getMin());
console.log(stack.getMax());
console.log(stack.peek());
stack.push(8);
console.log(stack.getMin());
console.log(stack.getMax());
console.log(stack.peek());
stack.push(3);
