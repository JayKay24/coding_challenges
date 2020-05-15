class Node {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let currentTail = this.tail;
      currentTail.next = newNode;
      this.tail = newNode;
      this.tail.prev = currentTail;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let removedTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let tailsPrev = removedTail.prev;
      tailsPrev.next = null;
      removedTail.prev = null;
      this.tail = tailsPrev;
    }
    this.length--;
    return removedTail;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let currentNode = null;
    let counter = 0;
    if (index <= Math.floor(this.length / 2)) {
      currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      currentNode = this.tail;
      while (counter !== index) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;
  }

  set(index, value) {
    let nodeToUpdate = this.get(index);
    if (nodeToUpdate) {
      nodeToUpdate.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      return false;
    } else if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const newNode = new Node(value);
      let leader = this.get(index - 1);
      newNode.next = leader.next;
      newNode.prev = leader;
      leader.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    }

    const nodeToRemove = this.get(index);
    const leader = nodeToRemove.prev;
    const follower = nodeToRemove.next;
    leader.next = follower;
    follower.prev = leader;
    nodeToRemove.prev = null;
    nodeToRemove.next = null;
    this.length--;
    return nodeToRemove;
  }
}

let doubly = new DoublyLinkedList();

doubly.push(12);
doubly.push(22);
doubly.push(32);
doubly.get(2);

console.log('')