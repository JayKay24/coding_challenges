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

const getTreeHeight = (root: TreeNode | null) => {
  let height = 0;

  while (root.left) {
    height++;
    root = root.left;
  }

  return height;
};

const nodeExists = (
  idxToFind: number,
  height: number,
  node: TreeNode | null
) => {
  let left = 0,
    right = 2 ** height - 1,
    count = 0;

  while (count < height) {
    const midOfTreeBase = Math.ceil((left + right) / 2);

    if (idxToFind >= midOfTreeBase) {
      if (node) {
        node = node.right;
        left = midOfTreeBase;
      }
    } else {
      if (node) {
        node = node.left;
        right = midOfTreeBase - 1;
      }
    }

    count++;
  }

  return !!node;
};

function countNodes(root: TreeNode | null): number {
  if (!root) return 0;

  const height = getTreeHeight(root);

  if (height === 0) return 1;

  const upperCount = 2 ** height - 1;

  let left = 0,
    right = upperCount;

  while (left < right) {
    const idxToFind = Math.ceil((left + right) / 2);

    if (nodeExists(idxToFind, height, root)) {
      left = idxToFind;
    } else {
      right = idxToFind - 1;
    }
  }

  return upperCount + left + 1;
}

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6))
);

console.log(countNodes(tree));
