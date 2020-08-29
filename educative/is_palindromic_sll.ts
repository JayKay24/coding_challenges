export class Node {
  constructor(public value: number, public next: Node | null = null) {}
}

const is_palindromic_linked_list = function (head: Node) {
  // TODO: Write your code here
  return false;
};

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);

head.next.next.next.next.next = new Node(2);
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);
