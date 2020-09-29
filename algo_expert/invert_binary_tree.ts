import { BST } from "./bst_construction";

class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function invertBinaryTree(tree: BinaryTree | null) {
  if (tree) {
    if (!tree.left && !tree.right) {
      return tree;
    }

    [tree.right, tree.left] = [tree.left, tree.right];

    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
  }

  return tree;
}

const tree = new BST(1);
tree.left = new BST(2);
tree.right = new BST(3);
tree.left.left = new BST(4);
tree.left.right = new BST(5);
tree.left.left.left = new BST(8);
tree.left.left.right = new BST(9);
tree.right.left = new BST(6);
tree.right.right = new BST(7);

let res = invertBinaryTree(tree);
console.log(res);
