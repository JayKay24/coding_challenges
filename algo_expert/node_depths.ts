// This is the class of the input binary tree.
export class BinaryTree {
  left: BinaryTree = null;
  right: BinaryTree = null;
  constructor(public value: number) {}
}

export function nodeDepths(root: BinaryTree): number {
  let collectiveSum = 0;

  function calculateDepthSum(node: BinaryTree, depthSum: number) {
    if (!node) return;

    calculateDepthSum(node.left, depthSum + 1);
    collectiveSum += depthSum;
    calculateDepthSum(node.right, depthSum + 1);
  }

  calculateDepthSum(root, 0);
  return collectiveSum;
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
