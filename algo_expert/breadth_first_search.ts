// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  getChild(name: string): Node | null {
    for (const child of this.children) {
      if (child.name === name) return child;
    }

    return null;
  }

  breadthFirstSearch(array: string[]) {
    let queue: Node[] = [],
      visited: { [prop: string]: boolean } = {};

    queue.push(this);
    visited[this.name] = true;

    while (queue.length > 0) {
      let visitedNode = queue.shift();
      visitedNode!.children.forEach((child) => {
        if (!visited[child.name]) {
          queue.push(child);
          visited[child.name] = true;
        }
      });

      array.push(visitedNode!.name);
    }
    return array;
  }
}

let graph = new Node("A");
graph.addChild("B");
graph.addChild("C");
graph.addChild("D");

let b = graph.getChild("B");
b.addChild("E");
b.addChild("F");

let d = graph.getChild("D");
d.addChild("G");
d.addChild("H");

let f = b.getChild("F");
f.addChild("I");
f.addChild("J");

let g = d.getChild("G");
g.addChild("K");

console.log(graph);
console.log(graph.breadthFirstSearch([]));
