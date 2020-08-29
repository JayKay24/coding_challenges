export class Node {
  constructor(public value: number, public next: Node | null = null) {}
}

const find_middle_of_linked_list = function (head: Node): Node {
  let fast = head,
    slow = head,
    fastSteps = 0,
    slowSteps = 0;

  while (fast && fast.next) {
    fast = fast.next.next;
    fastSteps++;
    if (fast && fast.next) {
      (slow = slow.next) && slowSteps++;
    }
  }

  for (let i = 0; i < fastSteps - slowSteps; i++) {
    slow = slow.next;
  }

  return slow;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

head.next.next.next.next.next = new Node(6);
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

head.next.next.next.next.next.next = new Node(7);
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);
