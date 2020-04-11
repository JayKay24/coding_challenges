class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
	constructor() {
		this._root = null;
	}

	insert(value) {
		const newNode = new Node(value)
		let currentNode = this._root;

		while (true) {
			if (this._root === null) {
				this._root = newNode;
				return this;
			} else if (currentNode.value > value) {
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
			}
		}
	}

	lookup(value) {
		if (!this._root) return false;
		let currentNode = this._root;
		
		while (currentNode) {
			if (value > currentNode.value) {
				currentNode = currentNode.right;
			} else if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else {
				return currentNode;
			}
		}
		return false;
	}

	remove(value) {
		if (!this._root) return false;
		let currentNode = this._root;
		let parentNode = null;

		while (currentNode) {
			if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else {
				break;
			}
		}
		if (currentNode.right) parentNode.right = currentNode.right;
		if (currentNode.left) parentNode.right.left = currentNode.left; 
		return this;
	}
}

function findClosestValueInBst(tree, target) {
  // Write your code here.
	let currentNode = tree._root;
	let leastAbsValue = tree._root.value;
	let closestNode = null;
	while (currentNode) {
		let absValue = Math.abs(currentNode.value - target);
		if (absValue < leastAbsValue) {
			leastAbsValue = absValue;
		}
		if (currentNode) closestNode = currentNode;
		if (target > currentNode.value) {
			currentNode = currentNode.right;
		} else if (target < currentNode.value) {
			currentNode = currentNode.left;
		} else {
			return currentNode.value;
		}
	}

	return closestNode.value;
}

const bst = new BinarySearchTree()
bst.insert(10);
bst.insert(5);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(13);
bst.insert(22);
bst.insert(14);

console.log(bst);
console.log(findClosestValueInBst(bst, 12));