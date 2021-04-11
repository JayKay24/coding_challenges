export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const traversePreorder = (node: TreeNode | null, maxDepth: number): number => {
  return node
    ? Math.max(
        traversePreorder(node.left, node.left ? maxDepth + 1 : maxDepth),
        traversePreorder(node.right, node.right ? maxDepth + 1 : maxDepth)
      )
    : maxDepth;
};

function maxDepth(root: TreeNode | null): number {
  const startingDepth = 0;

  return traversePreorder(root, root ? startingDepth + 1 : startingDepth);
}

const tree = new TreeNode(1, null, new TreeNode(2));
// const tree = new TreeNode(1);
console.log(maxDepth(tree));
