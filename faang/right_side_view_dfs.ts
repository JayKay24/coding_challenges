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

const rightSideView = (root: TreeNode): number[] => {
  if (!root) return [];
  const NRLPreorder = (
    node: TreeNode | null,
    level: number,
    result: number[] = []
  ) => {
    if (level >= result.length) {
      node && result.push(node.val);
    }

    ++level;

    node && NRLPreorder(node.right, level, result);
    node && NRLPreorder(node.left, level, result);

    return result;
  };

  return NRLPreorder(root, 0);
};

const tree = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(4))
);

console.log(rightSideView(tree));
