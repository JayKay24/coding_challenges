type ComparatorFn = (a: number, b: number) => boolean;

export class PriorityQueue {
  private heap: number[] = [];
  constructor(private comparator: ComparatorFn = (a, b) => a > b) {}

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  peek(): number {
    return this.heap[0];
  }

  push(val: number) {
    this.heap.push(val);
    this.siftUp();
    return this.size();
  }

  pop() {
    this.heap.shift();
    this.heap.unshift(this.heap.pop());
    this.siftDown();
    return this.size();
  }

  private siftDown() {
    let parentIdx = 0,
      parent = this.heap[parentIdx],
      leftChildIdx = this.getLeftChildIdx(parentIdx),
      rightChildIdx = this.getRightChildIdx(parentIdx),
      leftChild = this.heap[leftChildIdx],
      rightChild = this.heap[rightChildIdx];

    while (true) {
      if (this.comparator(leftChild, parent)) {
        this.swap(parentIdx, leftChildIdx);
        parentIdx = leftChildIdx;
      } else if (this.comparator(rightChild, parent)) {
        this.swap(parentIdx, rightChildIdx);
        parentIdx = rightChildIdx;
      } else {
        break;
      }
      parent = this.heap[parentIdx];
      leftChildIdx = this.getLeftChildIdx(parentIdx);
      rightChildIdx = this.getRightChildIdx(parentIdx);
      leftChild = this.heap[leftChildIdx];
      rightChild = this.heap[rightChildIdx];
    }
  }

  private siftUp() {
    let childIdx = this.size() - 1,
      parentIdx = this.getParentIdx(childIdx),
      child = this.heap[childIdx],
      parent = this.heap[parentIdx];

    while (true) {
      if (this.comparator(child, parent)) {
        this.swap(parentIdx, childIdx);
        childIdx = parentIdx;
      } else {
        break;
      }

      parentIdx = this.getParentIdx(childIdx);
      child = this.heap[childIdx];
      parent = this.heap[parentIdx];
    }
  }

  private getRightChildIdx(idx: number) {
    return idx * 2 + 2;
  }

  private getLeftChildIdx(idx: number) {
    return idx * 2 + 1;
  }

  private getParentIdx(idx: number) {
    return Math.floor((idx - 1) / 2);
  }

  private swap(idx1: number, idx2: number) {
    [this.heap[idx2], this.heap[idx1]] = [this.heap[idx1], this.heap[idx2]];
  }
}
