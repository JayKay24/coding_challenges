// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number): BST {
    let currentNode = <any>this;
    while (true) {
      if (currentNode.value === value) {
        const newNode = new BST(value);
        newNode.right = currentNode.right;
        currentNode.right = newNode;
      } else if (currentNode.value < value) {
        if (!currentNode.right) {
          const newNode = new BST(value);
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else if (currentNode.value > value) {
        if (!currentNode.left) {
          const newNode = new BST(value);
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
    return this;
  }

  contains(value: number) {
    let currentNode = <any>this;
    while (true) {
      if (currentNode.value === value) {
        return true;
      } else if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else if (!currentNode) {
        return false;
      }
    }
  }

  remove(value: number): BST {
    let nodeToRemove: BST,
      currentNode = <any>this,
      parentNode = <any>this;
    while (true) {
      if (currentNode.value === value) {
        nodeToRemove = currentNode;
        if (nodeToRemove.left || nodeToRemove.right) {
          if (!nodeToRemove.right) {
            parentNode.left = nodeToRemove.left;
            nodeToRemove.left = null;
            break;
          } else {
            if (nodeToRemove.right.left) {
              let newLeastNode = nodeToRemove.right.left,
                newLeastNodeParent = nodeToRemove.right;
              while (true) {
                if (!newLeastNode) {
                  break;
                } else if (!newLeastNode.left) {
                  if (newLeastNode.right) {
                    newLeastNodeParent = newLeastNode;
                    newLeastNode = newLeastNode.right;
                  } else {
                    newLeastNode.left = nodeToRemove.left;
                    newLeastNode.right = nodeToRemove.right;
                    newLeastNodeParent.left = null;
                    nodeToRemove.left = null;
                    nodeToRemove.right = null;
                    return newLeastNode;
                  }
                } else {
                  newLeastNodeParent = newLeastNode;
                  newLeastNode = newLeastNode.left;
                }
              }
            } else {
              parentNode.left = nodeToRemove.left;
              nodeToRemove.left = null;
              break;
            }
          }
        } else if (nodeToRemove === this) {
          break;
        } else {
          parentNode.left = null;
          break;
        }
      } else if (currentNode.value < value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value > value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (!currentNode) {
        break;
      }
    }
    return this;
  }
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

tree.contains(15);
tree.insert(12);
tree.remove(10);
console.log(tree);
