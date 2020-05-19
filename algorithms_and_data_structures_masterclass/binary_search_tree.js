class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode.value < val) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          return this;
        }
      } else if (currentNode.value > val) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          return this;
        }
      } else {
        return this;
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    if (this.root.value === val) return true;
    let currentNode = this.root;

    while (true) {
      if (currentNode.value === val) {
        return true;
      } else if (currentNode.value > val) {
        if (!currentNode.left) return false;
        currentNode = currentNode.left;
      } else if (currentNode.value < val) {
        if (!currentNode.right) return false;
        currentNode = currentNode.right;
      }
    }
  }

  bfs() {
    if (this.root) {
      let queue = [];
      let visited = [];
      let currentVertex = this.root;
      queue.push(currentVertex);

      while (queue.length > 0) {
        currentVertex = queue.shift();
        visited.push(currentVertex);
        this.traverseBFS(queue, currentVertex);
      }
      return visited;
    }
  }

  traverseBFS(queue, vertex) {
    if (vertex.left) {
      queue.push(vertex.left);
    }
    if (vertex.right) {
      queue.push(vertex.right);
    }
  }

  preOrder() {
    const visited = [];
    let currentNode = this.root;

    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(currentNode);
    return visited;
  }

  postOrder() {
    const visited = [];
    let currentNode = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(currentNode);
    return visited;
  }

  inOrder() {
    const visited = [];
    let currentNode = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(currentNode);
    return visited;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);
console.log("");
