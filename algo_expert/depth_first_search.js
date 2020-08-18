class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    const helper = (node) => {
      array.push(node.name);

      for (const child of node.children) {
        helper(child);
      }
    };

    helper(this);

    return array;
  }
}

let graph = new Node("A");
graph.addChild("B");
graph.addChild("C");
graph.addChild("D");
graph.children[0].addChild("E");
graph.children[0].addChild("F");
graph.children[0].children[1].addChild("I");
graph.children[0].children[1].addChild("J");
graph.children[2].addChild("G");
graph.children[2].addChild("H");
graph.children[2].children[0].addChild("K");

graph.depthFirstSearch([]);
