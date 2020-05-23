class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1]) this.adjacencyList[v1].push(v2);
    if (this.adjacencyList[v2]) this.adjacencyList[v2].push(v1);
    return this.adjacencyList;
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1])
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(
        (value) => value !== v2
      );
    if (this.adjacencyList[v2])
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(
        (value) => value !== v1
      );
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      for (let v of this.adjacencyList[vertex]) {
        this.removeEdge(v, vertex);
      }
      delete this.adjacencyList[vertex];
    }
  }

  DFS(vertex) {
    const results = [];
    const visited = {};

    const helper = (v) => {
      if (!v) return;
      visited[v] = true;
      results.push(v);
      for (const vertex of this.adjacencyList[v]) {
        if (!visited[vertex]) helper(vertex);
      }
    }

    helper(vertex);

    return results;
  }

  BFS(vertex) {
    const queue = [vertex];
    const results = [];
    const visited = { [vertex]: true };
    let currentVertex;
    
    while (queue.length > 0) {
      results.push(queue.shift());
      currentVertex = results[results.length - 1];

      this.adjacencyList[currentVertex].forEach(v => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }
    return results;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
// console.log(graph.DFS("A"));
console.log(graph.BFS("A"));
