class SLLNode {
  constructor(public value: number, public next: SLLNode | null = null) {}
}

const hasCycle = (head: SLLNode) => {
  if (!head) return false;
  type visitedType = { [prop: number]: boolean };
  const visited: visitedType = {};

  let currentNode = head;
  while (currentNode) {
    if (visited[currentNode.value]) return true;
    !visited[currentNode.value] && (visited[currentNode.value] = true);
    currentNode = currentNode.next;
  }

  return false;
};

const head = new SLLNode(1);
head.next = new SLLNode(2);
head.next.next = new SLLNode(3);
head.next.next.next = new SLLNode(4);
head.next.next.next.next = new SLLNode(5);
head.next.next.next.next.next = new SLLNode(6);
console.log(`LinkedList has cycle: ${hasCycle(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${hasCycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle: ${hasCycle(head)}`);
