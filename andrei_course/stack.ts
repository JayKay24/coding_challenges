type strOrNum = string | number;

export class Node {
  constructor(public value: strOrNum, public next: Node = null) {}
}

export class Stack {
  top: Node = null;
  bottom: Node = null;
  length: number;
  constructor() {
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value: strOrNum) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = this.top;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.top) {
      const currentTop = this.top;
      if (this.length === 1) {
        this.top = null;
        this.bottom = this.top;
      } else {
        const newTop = currentTop.next;
        this.top = newTop;
      }

      this.length--;
      return currentTop;
    }

    return null;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.push("algoexpert");
console.log(myStack);
