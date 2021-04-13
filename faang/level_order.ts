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

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [],
    queue: TreeNode[] = [root];

  let levelLength = queue.length,
    levelArr: number[] = [],
    levelLengthCounter = 0;

  while (queue.length) {
    const nodeToLookAt = queue.shift();
    levelLengthCounter++;

    if (nodeToLookAt && nodeToLookAt.left) queue.push(nodeToLookAt.left);
    if (nodeToLookAt && nodeToLookAt.right) queue.push(nodeToLookAt.right);

    nodeToLookAt && levelArr.push(nodeToLookAt.val);

    if (levelLengthCounter === levelLength) {
      result.push(levelArr);
      levelLength = queue.length;
      levelLengthCounter = 0;
      levelArr = [];
    }
  }

  return result;
}

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

console.log(levelOrder(tree));
