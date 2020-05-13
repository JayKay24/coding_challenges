class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.length++;
    } else {
      let currentNode = this.head;
      while (currentNode) {
        if (!currentNode.next) {
          currentNode.next = newNode;
          this.tail = newNode;
          this.length++;
          break;
        }
        currentNode = currentNode.next;
      }
    }
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      let currentNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return currentNode;
    }
    let parentToLastNode = this.head;
    let currentNode = parentToLastNode.next;

    while (currentNode.next) {
      parentToLastNode = currentNode;
      currentNode = currentNode.next;
    }

    parentToLastNode.next = null;
    this.tail = parentToLastNode;
    this.length--;
    return currentNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (oldHead.next) {
      this.head = oldHead.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;

    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (counter === index && currentNode) return currentNode;
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  set(index, value) {
    let nodeToBeUpdated = this.get(index);
    if (!nodeToBeUpdated) return false;
    nodeToBeUpdated.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(value);
      return true;
    } else if (index === this.length) {
      this.push(value);
      return true;
    }
    let newNode = new Node(value);
    let leader = this.get(index - 1);
    let follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) this.pop();
    if (index === 0) this.shift();
    let leader = this.get(index - 1);
    let nodeToBeRemoved = leader.next;
    let follower = nodeToBeRemoved.next;
    leader.next = follower;
    this.length--;
    return nodeToBeRemoved;
  }

  reverse() {
    let tail = this.tail;
    this.tail = this.head;
    this.head = tail;
    let currentNode = this.tail;
    while (currentNode) {
      let nextNode = currentNode.next;
      nextNode.next = currentNode;
      currentNode = currentNode.next;
    }
    return this;
  }
}

let linkedList = new SinglyLinkedList();
linkedList.push(12);
linkedList.push(22);
linkedList.push(32);
linkedList.reverse();
// let popped = linkedList.pop();
console.log('');