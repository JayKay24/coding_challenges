class MaxBinaryHeap {
  constructor(arr) {
    this.values = arr;
  }

  insert(val) {
    this.values.push(val);
    if (this.values.length > 1) {
      let currentIndex = this.values.length - 1;

      while (
        this.values[Math.floor((currentIndex - 1) / 2)] <
          this.values[currentIndex] &&
        currentIndex >= 1
      ) {
        this.swap(
          this.values,
          currentIndex,
          Math.floor((currentIndex - 1) / 2)
        );
        currentIndex = Math.floor((currentIndex - 1) / 2);
      }
    }
    return this.values;
  }

  swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  extractMax() {
    this.swap(this.values, 0, this.values.length - 1);
    const oldRoot = this.values.pop();

    let parentIndex = 0;
    while (true) {
      let leftChildIndex = 2 * parentIndex + 1;
      let rightChildIndex = 2 * parentIndex + 2;
      let maxChild = null;
      let currentIndex = null;
      if (leftChildIndex < this.values.length) {
        if (rightChildIndex < this.values.length) {
          maxChild = Math.max(
            this.values[leftChildIndex],
            this.values[rightChildIndex]
          );
          currentIndex =
            maxChild === this.values[leftChildIndex]
              ? leftChildIndex
              : rightChildIndex;
          this.swap(this.values, parentIndex, currentIndex);
          parentIndex = currentIndex;
        } else {
          currentIndex = leftChildIndex;
          this.swap(this.values, parentIndex, currentIndex);
          parentIndex = currentIndex;
        }
      } else {
        break;
      }
    }
    return oldRoot;
  }
}

let maxBinHeap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);
// let maxBinHeap = new MaxBinaryHeap([27, 18, 12]);
// maxBinHeap.insert(55);
// maxBinHeap.insert(41);
// maxBinHeap.insert(39);
// maxBinHeap.insert(18);
// maxBinHeap.insert(27);
// maxBinHeap.insert(12);
maxBinHeap.extractMax();
console.log("");
