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

    if (val) {
      this.push(val);
    }
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
    if (idx < 0 || idx >= this.length) return null;
    
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (counter === idx) return currentNode;
      currentNode = currentNode.next;
      counter++;
    }

    return null;
  }

  insert(idx, val) {
    const newNode = new Node(val);

    if (idx > this.length) return false;

    if (idx === this.length) {
      this.push(val);
      return true;
    }

    const follower = this.get(idx);

    if (follower) {
      const leader = this.get(idx - 1);

      newNode.next = follower;
      leader.next = newNode;
      this.length++;
      return true;
    } else {
      return false;
    }
  }
}

const sll = new SinglyLinkedList();
sll.push(5).push(10).push(15).push(20);
// sll.insert(2, 12);
sll.get(4);
console.log(sll.get(1));