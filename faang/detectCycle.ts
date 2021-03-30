export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || (head && !head.next)) return null;
  let fast = head,
    slow = head,
    tracker = head;

  while (true) {
    if (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    } else {
      return null;
    }

    if (fast === slow) {
      break;
    }
  }

  while (tracker !== slow) {
    if (tracker && slow) {
      tracker = tracker.next;
      slow = slow.next;
    } else {
      return null;
    }
  }

  return tracker;
}

// let cycle = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4))));
// let back = cycle.next;
// cycle.next.next.next.next = back;

let cycle = new ListNode(1, new ListNode(2));
let back = cycle;
cycle.next.next = back;

console.log(detectCycle(cycle));
