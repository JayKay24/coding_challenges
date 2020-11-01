// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
export class MinHeap {
  heap: number[];

  constructor(array: number[]) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array: number[]) {
    this.heap = [];

    for (const num of array) {
      this.heap.push(num);
      this.siftUp();
    }
    return this.heap;
  }

  swap(idx1: number, idx2: number) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  siftDown() {
    let parentIdx = 0,
      heapLength = this.heap.length;

    while (true) {
      let leftChildIdx = 2 * parentIdx + 1,
        rightChildIdx = 2 * parentIdx + 2,
        parent = this.heap[parentIdx],
        leftChild: number = this.heap[leftChildIdx],
        rightChild: number = this.heap[rightChildIdx],
        swapIdx: number | null = null;

      if (leftChildIdx < heapLength) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild < parent) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < heapLength) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swapIdx === null && rightChild < parent) ||
          (swapIdx !== null && leftChild && rightChild < leftChild)
        ) {
          swapIdx = rightChildIdx;
        }
      }

      if (swapIdx === null) break;
      this.swap(parentIdx, swapIdx);
      parentIdx = swapIdx;
    }
  }

  siftUp() {
    let currentIdx = this.heap.length - 1;

    while (currentIdx > 0) {
      let parentIdx = Math.floor((currentIdx - 1) / 2),
        current = this.heap[currentIdx],
        parent = this.heap[parentIdx];

      if (!(current < parent)) {
        break;
      }
      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1);

    const returnValue = this.heap.pop();
    this.siftDown();
    return returnValue;
  }

  insert(value: number) {
    if (!this.heap) this.heap = [];

    this.heap.push(value);
    if (this.heap.length > 1) {
      this.siftUp();
    }
  }
}

let minHeap = new MinHeap([48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]);
minHeap.insert(76);
minHeap.peek();
minHeap.remove();
minHeap.peek();
minHeap.remove();
minHeap.peek();
minHeap.insert(87);
console.log(minHeap.heap);
