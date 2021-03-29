export class Node {
  constructor(
    public val: number = 0,
    public prev: Node | null = null,
    public next: Node | null = null,
    public child: Node | null = null
  ) {}
}

function flatten(
  head: Node | null,
  prevStart: Node | null = null,
  nextAfterEnd: Node | null = null
): Node | null {
  let nodeBefore: Node | null = null,
    nodeAfter: Node | null = null,
    currentNode: Node | null = null;

  currentNode = head;

  if (prevStart) {
    currentNode.prev = prevStart;
    prevStart.next = currentNode;
  }

  if (nextAfterEnd) {
    while (currentNode) {
      if (currentNode) {
        if (!currentNode.next) {
          currentNode.next = nextAfterEnd;
          nextAfterEnd.prev = currentNode;
          currentNode = null;
          break;
        }
      }
      currentNode = currentNode.next;
    }
  }

  while (currentNode) {
    nodeBefore = currentNode;
    if (currentNode.child) {
      nodeAfter = currentNode.next;

      flatten(currentNode.child, nodeBefore, nodeAfter);
    }

    currentNode.child = null;

    currentNode = currentNode.next;
  }

  return head;
}

let dll = new Node(1, null, new Node(2, null, null, new Node(4)), new Node(3));

dll.child.child = new Node(5);
dll.child.child.next = new Node(6);

console.log(flatten(dll));
