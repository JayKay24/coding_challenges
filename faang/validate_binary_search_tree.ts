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

function validateBST(
  node: TreeNode | null,
  lowerBound: number,
  upperBound: number
): boolean {
  if (!node) return true;
  let result = node.val < upperBound && node.val > lowerBound;
  return (
    result &&
    validateBST(node.left, lowerBound, node.val) &&
    validateBST(node.right, node.val, upperBound)
  );
}

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;
  return validateBST(root, -Infinity, Infinity);
}

// const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
// const tree = new TreeNode(
//   5,
//   new TreeNode(1),
//   new TreeNode(4, new TreeNode(3), new TreeNode(6))
// );
const tree = new TreeNode(
  15,
  new TreeNode(12, new TreeNode(10), new TreeNode(16)),
  new TreeNode(17, new TreeNode(16), new TreeNode(18))
);

console.log(isValidBST(tree));
