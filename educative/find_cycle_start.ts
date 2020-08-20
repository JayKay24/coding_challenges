export class SLLNode {
  constructor(public value: number, public next: SLLNode = null) {
    this.value = value;
    this.next = next;
  }
}

const findLength = (head: SLLNode): number => {
  let fast = head,
    slow = head;

  const getLength = (node: SLLNode): number => {
    let current = node,
      length = 0;

    while (true) {
      current = current.next;
      length++;
      if (current === node) break;
    }

    return length;
  };

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return getLength(slow);
    }
  }

  return 0;
};

const find_cycle_start = function (head: SLLNode): SLLNode {
  let pointer1 = head,
    pointer2 = head,
    length = findLength(head);

  for (let i = 0; i < length; i++) {
    pointer1 = pointer1.next;
  }

  while (true) {
    if (pointer2 === pointer1) break;
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer1;
};

const head = new SLLNode(1);
head.next = new SLLNode(2);
head.next.next = new SLLNode(3);
head.next.next.next = new SLLNode(4);
head.next.next.next.next = new SLLNode(5);
head.next.next.next.next.next = new SLLNode(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);
console.log('end');
