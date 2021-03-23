/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

export function reverseLinkedList(node: ListNode) {
  let prevNode: null | ListNode = null,
    nextNode: ListNode | null,
    currentNode: ListNode | null;

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

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (right - left < 1) return head;
  let prevToStart: ListNode | null = null,
    currentNode: ListNode | null = null,
    startNode: ListNode | null = null,
    nodeAfterEnd: ListNode | null = null,
    nodeAtEnd: ListNode | null = null,
    counter = 1;

  currentNode = head;
  if (left - counter === 0) {
    startNode = head;
  }

  while (currentNode) {
    if (currentNode) {
      if (left - counter === 1 && !startNode) {
        prevToStart = currentNode;
        startNode = currentNode.next;
      }

      if (counter - right === 0) {
        nodeAfterEnd = currentNode.next;
        nodeAtEnd = currentNode;
        break;
      }

      if (currentNode.next) {
        currentNode = currentNode.next;
      }
    }
    counter++;
  }

  if (!prevToStart && !nodeAfterEnd) {
    const reversedL = reverseLinkedList(head);
    return reversedL;
  }

  if (prevToStart) {
    prevToStart.next = null;
  }

  if (nodeAtEnd) {
    nodeAtEnd.next = null;
  }

  const reversedSegment = reverseLinkedList(startNode);
  if (prevToStart) {
    prevToStart.next = reversedSegment;
  }

  if (startNode) {
    startNode.next = nodeAfterEnd;
  }

  return prevToStart ? head : reversedSegment;
}

let sll = new ListNode(1, new ListNode(2, new ListNode(3)));

console.log(reverseBetween(sll, 2, 4));
