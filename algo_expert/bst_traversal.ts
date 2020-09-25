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

export function inOrderTraverse(tree: BST | null, array: number[]) {
  if (tree.left) {
    inOrderTraverse(tree.left, array);
  }

  array.push(tree.value);

  if (tree.right) {
    inOrderTraverse(tree.right, array);
  }
  return array;
}

export function preOrderTraverse(tree: BST | null, array: number[]) {
  array.push(tree.value);

  if (tree.left) {
    preOrderTraverse(tree.left, array);
  }

  if (tree.right) {
    preOrderTraverse(tree.right, array);
  }
  return array;
}

export function postOrderTraverse(tree: BST | null, array: number[]) {
  if (tree.left) {
    postOrderTraverse(tree.left, array);
  }

  if (tree.right) {
    postOrderTraverse(tree.right, array);
  }

  array.push(tree.value);

  return array;
}

let tree = new BST(10);
tree.left = new BST(5);
tree.right = new BST(15);
tree.left.left = new BST(2);
tree.left.right = new BST(5);
tree.left.left.left = new BST(1);
tree.right.left = new BST(13);
tree.right.right = new BST(22);
tree.right.left.right = new BST(14);

console.log(inOrderTraverse(tree, []));
console.log(preOrderTraverse(tree, []));
console.log(postOrderTraverse(tree, []));
