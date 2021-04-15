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

function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];

  const result: number[] = [],
    queue: TreeNode[] = [root];

  let levelLength = queue.length,
    levelLengthCounter = 0,
    levelArr: number[] = [];

  while (queue.length) {
    const nodeToLookAt = queue.shift();
    levelLengthCounter++;

    if (nodeToLookAt && nodeToLookAt.left) queue.push(nodeToLookAt.left);
    if (nodeToLookAt && nodeToLookAt.right) queue.push(nodeToLookAt.right);

    nodeToLookAt && levelArr.push(nodeToLookAt.val);

    if (levelLengthCounter === levelLength) {
      result.push(levelArr[levelArr.length - 1]);
      levelLength = queue.length;
      levelArr = [];
      levelLengthCounter = 0;
    }
  }

  return result;
}

// const tree = new TreeNode(
//   1,
//   new TreeNode(2, null, new TreeNode(5)),
//   new TreeNode(3, null, new TreeNode(4))
// );

const tree: TreeNode | null = new TreeNode(1);

console.log(rightSideView(tree));
