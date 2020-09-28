export function minHeightBst(array: number[]) {
  const minHeightBstHelper = (
    arr: number[],
    leftIdx: number,
    rightIdx: number
  ): BST | null => {
    if (leftIdx <= rightIdx) {
      let rootIdx = Math.floor((rightIdx - leftIdx) / 2 + leftIdx);
      let root = new BST(arr[rootIdx]);
      root.left = minHeightBstHelper(arr, leftIdx, rootIdx - 1);
      root.right = minHeightBstHelper(arr, rootIdx + 1, rightIdx);
      return root;
    }

    return null;
  };

  let leftIdx = 0;
  let rightIdx = array.length - 1;

  return minHeightBstHelper(array, leftIdx, rightIdx);
}

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

let res = minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22]);
console.log(res);
