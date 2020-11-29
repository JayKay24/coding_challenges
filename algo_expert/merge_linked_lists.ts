// This is an input class. Do not edit.
class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function mergeLinkedLists(headOne: LinkedList, headTwo: LinkedList) {
  let dummy = new LinkedList(-Infinity);
  let head = dummy,
    head1: LinkedList | null = headOne,
    head2: LinkedList | null = headTwo;

  while (head1 && head2) {
    if (head1.value < head2.value) {
      dummy.next = head1;
      head1 = head1.next;
    } else {
      dummy.next = head2;
      head2 = head2.next;
    }
    dummy = dummy.next;
  }

  if (head1) {
    dummy.next = head1;
  } else {
    dummy.next = head2;
  }

  return head.next;
}

let list1 = new LinkedList(2);
list1.next = new LinkedList(6);
list1.next.next = new LinkedList(7);
list1.next.next.next = new LinkedList(8);

let list2 = new LinkedList(1);
list2.next = new LinkedList(3);
list2.next.next = new LinkedList(4);
list2.next.next.next = new LinkedList(5);
list2.next.next.next.next = new LinkedList(9);
list2.next.next.next.next.next = new LinkedList(10);

let res = mergeLinkedLists(list1, list2);
