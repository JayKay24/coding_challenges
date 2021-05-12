export class TrieNode {
  children: { [prop: string]: TrieNode | null };

  constructor() {
    this.children = {};
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  search(word: string) {
    let currentNode = this.root;

    for (const char of word) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        return null;
      }
    }

    return currentNode;
  }

  insert(word: string) {
    let currentNode = this.root;

    for (const char of word) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        const newNode = new TrieNode();
        currentNode.children[char] = newNode;
        currentNode = newNode;
      }
    }

    currentNode.children["*"] = null;
  }

  collectAllWords(
    node: TrieNode | null = null,
    word: string = "",
    words: string[] = []
  ) {
    const currentNode = node || this.root;

    for (const [key, childNode] of Object.entries(currentNode.children)) {
      if (key === "*") {
        words.push(word);
      } else {
        this.collectAllWords(childNode, word + key, words);
      }
    }

    return words;
  }

  autoComplete(prefix: string) {
    const currentNode = this.search(prefix);
    if (!currentNode) return null;

    return this.collectAllWords(currentNode);
  }
}
