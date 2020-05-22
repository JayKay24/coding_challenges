class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key, this.keyMap.length);
    if (Array.isArray(this.keyMap[index]) && this.keyMap[index].length > 0) {
      this.keyMap[index].push([key, value]);
    } else {
      this.keyMap[index] = [[key, value]];
    }
  }

  get(key) {
    let index = this._hash(key, this.keyMap.length);
    if (Array.isArray(this.keyMap[index]) && this.keyMap[index].length > 0) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }
}

const hashTable = new HashTable();
hashTable.set('black', '#000');
hashTable.set('white', '#fff');
console.log(hashTable.get('white'));
console.log(hashTable.get('black'));