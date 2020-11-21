class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function maxPathSum(tree: BinaryTree) {
  let maxSum = -Infinity;

  const traversePostOrder = (node: BinaryTree) => {
    let left: number = node.left
      ? Math.max(0, traversePostOrder(node.left))
      : 0;
    let right: number = node.right
      ? Math.max(0, traversePostOrder(node.right))
      : 0;
    maxSum = Math.max(maxSum, left + right + node.value);
    return Math.max(left, right) + node.value;
  };

  traversePostOrder(tree);

  return maxSum;
}

const binTree = new BinaryTree(1);
binTree.left = new BinaryTree(2);
binTree.right = new BinaryTree(3);
binTree.left.left = new BinaryTree(4);
binTree.left.right = new BinaryTree(5);
binTree.right.left = new BinaryTree(6);
binTree.right.right = new BinaryTree(7);

let res = maxPathSum(binTree);
console.log(res);
