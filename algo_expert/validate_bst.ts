class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function validateBst(tree: BST | null) {
  const validateBstHelper = (
    node: BST | null,
    min: number,
    max: number
  ): boolean => {
    if (!node) {
      return true;
    } else if (node.value < min || node.value >= max) {
      return false;
    }

    return (
      validateBstHelper(node.left, min, node.value) &&
      validateBstHelper(node.right, node.value, max)
    );
  };

  return validateBstHelper(tree, -Infinity, Infinity);
}

let tree = new BST(10);
tree.left = new BST(5);
tree.right = new BST(15);
tree.left.left = new BST(2);
tree.left.right = new BST(5);
tree.left.left.left = new BST(1);
tree.right.left = new BST(13);
tree.right.right = new BST(14);
tree.right.left.right = new BST(14);

console.log(validateBst(tree));
