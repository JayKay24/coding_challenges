export class Node {
  constructor(public val: number, public next: Node | null = null) {}
}

export function reverseLinkedList(node: Node) {
  let prevNode: null | Node = null,
    nextNode: Node | null,
    currentNode: Node | null;

  currentNode = node;

  while (currentNode) {
    if (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
    }
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;
}

let sll = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

console.log(reverseLinkedList(sll));
