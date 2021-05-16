export class TrieNode {
  children: Map<string, TrieNode | null>;

  constructor() {
    this.children = new Map();
  }
}

export class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let currentNode = this.root;

    for (const char of word) {
      if (currentNode.children.get(char)) {
        currentNode = currentNode.children.get(char);
      } else {
        const newNode = new TrieNode();
        currentNode.children.set(char, newNode);
        currentNode = newNode;
      }
    }

    currentNode.children.set("*", null);
  }

  search(word: string): boolean {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children.get(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }

    return currentNode.children.has("*") ? true : false;
  }

  startsWith(prefix: string): boolean {
    let currentNode = this.root;

    for (const char of prefix) {
      if (!currentNode.children.get(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
