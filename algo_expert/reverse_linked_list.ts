// This is an input class. Do not edit.
class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function reverseLinkedList(head: LinkedList) {
  let prev: LinkedList | null = null,
    nextNode: LinkedList | null = head.next;

  while (true) {
    head.next = prev;
    prev = head;

    if (nextNode) {
      head = nextNode;
      nextNode = nextNode.next;
    } else {
      break;
    }
  }

  return prev;
}

let list = new LinkedList(0);
list.next = new LinkedList(1);
list.next.next = new LinkedList(2);
list.next.next.next = new LinkedList(3);
list.next.next.next.next = new LinkedList(4);
list.next.next.next.next.next = new LinkedList(5);

console.log(reverseLinkedList(list));
