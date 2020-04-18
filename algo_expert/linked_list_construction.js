// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head) {
      const newNode = new Node(node);
      const currentHead = this.head;
      currentHead.prev = newNode;
      newNode.next = currentHead;
      this.head = newNode;
    } else {
      this.head = new Node(node);
      this.tail = this.head;
    }
  }

  setTail(node) {
    if (this.tail) {
      const newNode = new Node(node);
      const currentTail = this.tail;
      currentTail.next = newNode;
      newNode.prev = currentTail;
      this.tail = newNode;
    } else {
      const newNode = new Node(node);
      this.head = newNode;
      this.tail = this.head;
    }
  }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
    // let currentNode = this._traverseList(node);
    // if (currentNode) {
    //   const newNode = new Node(nodeToInsert);
    //   if (currentNode.prev) {
    //     const parent = currentNode.prev;
    //     parent.next = newNode;
    //     newNode.prev = parent;
    //   }
    //   newNode.next = currentNode;
    //   currentNode.prev = newNode;
    // }
  }

  insertAfter(node, nodeToInsert) {
    const newNode = new Node(nodeToInsert);
    const existingNode = this._traverseList(node);
    if (existingNode) {
      const child = existingNode.next;
      existingNode.next = newNode;
      newNode.prev = existingNode;
      newNode.next = child;
    }
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
  }

  removeNodesWithValue(value) {
    // Write your code here.
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        const parent = currentNode.prev;
        const nextNode = currentNode.next;
        if (parent) parent.next = nextNode;
        if (nextNode) nextNode.prev = parent;
        currentNode = nextNode;
        continue;
      }
      currentNode = currentNode.next;
    }
  }

  remove(node) {
    let nodeToBeRemoved = this._traverseList(node);
    if (nodeToBeRemoved) {
      const parent = nodeToBeRemoved.prev;
      const nextNode = nodeToBeRemoved.next;
      if (parent) parent.next = nextNode;
      nextNode.prev = parent;
    }
  }

  containsNodeWithValue(value) {
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  _traverseList(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }
    return false;
  }
}

const doubly = new DoublyLinkedList();
doubly.setHead(1);
doubly.setTail(2);
doubly.setTail(3);
doubly.setTail(4);
doubly.setTail(5);
doubly.remove(3);
doubly.setTail(5);
doubly.setTail(5);
doubly.setTail(5);
doubly.removeNodesWithValue(5);
doubly.insertAfter(4, 7);
console.log(doubly);
