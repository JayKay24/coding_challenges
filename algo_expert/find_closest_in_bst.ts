export class BST {
  left: BST = null;
  right: BST = null;
  constructor(public value: number) {}
}

export function findClosestValueInBst(tree: BST, target: number): number {
  let closestNodeValue: number = tree.value;
  let currentMinDifference = Infinity;

  function findLeastAbsolute(node: BST) {
    if (!node) return;

    let currentDifference = Math.abs(node.value - target);
    if (currentDifference < currentMinDifference) {
      currentMinDifference = currentDifference;
      closestNodeValue = node.value;
    }
    findLeastAbsolute(node.left);
    findLeastAbsolute(node.right);
  }

  findLeastAbsolute(tree);
  return closestNodeValue;
}

let bst = new BST(10);
bst.right = new BST(5);
bst.left = new BST(15);
bst.right.right = new BST(2);
bst.right.left = new BST(5);
bst.left.right = new BST(13);
bst.left.left = new BST(22);
bst.right.right.right = new BST(1);
bst.left.right.left = new BST(14);

console.log(findClosestValueInBst(bst, 12));
