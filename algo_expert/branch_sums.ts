class BinaryTree {
  constructor(
    public value: number,
    public left: BinaryTree = null,
    public right: BinaryTree = null
  ) {}
}

function branchSums(root: BinaryTree) {
  const list: number[] = [];
  calculateRunningSum(root, 0, list);
  return list;
}

function calculateRunningSum(
  node: BinaryTree,
  runningSum: number,
  list: number[]
) {
  if (node && !node.left && !node.right) {
    list.push(node.value + runningSum);
    return;
  }

  if (node) {
    calculateRunningSum(node.left, node.value + runningSum, list);
    calculateRunningSum(node.right, node.value + runningSum, list);
  }
  return;
}

const binTree = new BinaryTree(
  1,
  new BinaryTree(
    2,
    new BinaryTree(4, new BinaryTree(8), new BinaryTree(9)),
    new BinaryTree(5, new BinaryTree(10))
  ),
  new BinaryTree(3, new BinaryTree(6), new BinaryTree(7))
);

let sumsRes = branchSums(binTree);
console.log(sumsRes);
