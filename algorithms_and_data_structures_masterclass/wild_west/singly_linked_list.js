class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    this.push(val);
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let removedNode = null;
    if (this.length === 1) {
      removedNode = this.tail;
      this.head = null;
      this.tail = null;
    } else {
      removedNode = this.tail;
      let leader = null;
      let currentNode = this.head;

      while (currentNode.next) {
        leader = currentNode;
        currentNode = currentNode.next;
      }

      leader.next = null;
      this.tail = leader;
    }

    this.length--;

    return removedNode;
  }

  get(idx) {
    if (this.length < 0 ) return null;
    
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (counter === idx) return currentNode;
      currentNode = currentNode.next;
      counter++;
    }

    return null;
  }
}

const sll = new SinglyLinkedList(5);
sll.push(10);
sll.push(15);
console.log(sll.get(4));