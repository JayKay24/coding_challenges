// This is the class of the input binary tree.
export class BinaryTree {
  left: BinaryTree = null;
  right: BinaryTree = null;
  constructor(public value: number) {}
}

export function nodeDepths(root: BinaryTree) {
  let levelCount = 0;
  let depth = 0;
  let currentNode = root;
  let queue: BinaryTree[] = [];
  queue.push(currentNode);

  while (queue.length) {
    currentNode = queue.shift();
    let childrenCount = 0;
    if (currentNode.left) {
      queue.push(currentNode.left);
      ++childrenCount;
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
      ++childrenCount;
    }
    depth += ++levelCount * childrenCount;

  }

  return depth;
}

const binTree = new BinaryTree(1);
binTree.left = new BinaryTree(2);
binTree.right = new BinaryTree(3);
binTree.left.left = new BinaryTree(4);
binTree.left.right = new BinaryTree(5);
binTree.left.left.left = new BinaryTree(8);
binTree.left.left.right = new BinaryTree(9);
binTree.right.left = new BinaryTree(6);
binTree.right.right = new BinaryTree(7);

let res = nodeDepths(binTree);
console.log(res);
