// This is an input class. Do not edit.
class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function findLoop(head: LinkedList) {
  let cycleLength = 0,
    slow: LinkedList | null = head,
    fast: LinkedList | null = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    if (slow) slow = slow.next;
    if (slow === fast) {
      cycleLength = calculateCycleLength(slow);
      break;
    }
  }

  return findStart(head, cycleLength);
}

const calculateCycleLength = (slow: LinkedList | null) => {
  let current = slow,
    cycleLength = 0;

  while (true) {
    if (current) {
      current = current.next;
      cycleLength++;
    }
    if (current === slow) break;
  }

  return cycleLength;
};

const findStart = (head: LinkedList, cycleLength: number) => {
  let pointer1: LinkedList | null = head,
    pointer2: LinkedList | null = head;

  while (cycleLength > 0) {
    if (pointer2) {
      pointer2 = pointer2.next;
      cycleLength--;
    } else {
      break;
    }
  }

  while (pointer1 !== pointer2) {
    if (pointer1) pointer1 = pointer1.next;
    if (pointer2) pointer2 = pointer2.next;
  }

  return pointer1;
};

let sll = new LinkedList(0);
sll.next = new LinkedList(1);
sll.next.next = new LinkedList(2);
sll.next.next.next = new LinkedList(3);
sll.next.next.next.next = new LinkedList(4);

let cycleStart = sll.next.next.next.next;

sll.next.next.next.next.next = new LinkedList(5);
sll.next.next.next.next.next.next = new LinkedList(6);
sll.next.next.next.next.next.next.next = new LinkedList(7);
sll.next.next.next.next.next.next.next.next = new LinkedList(8);
sll.next.next.next.next.next.next.next.next.next = new LinkedList(9);
sll.next.next.next.next.next.next.next.next.next.next = cycleStart;

let res = findLoop(sll);
console.log(res);
