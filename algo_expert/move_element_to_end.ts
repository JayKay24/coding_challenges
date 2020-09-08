export function moveElementToEnd(array: number[], toMove: number) {
  const swap = (arr: number[], idx1: number, idx2: number) => {
    [arr[idx2], arr[idx1]] = [arr[idx1], arr[idx2]];
  };

  let follower = 0;
  let leader = 1;

  while (leader < array.length) {
    if (array[leader] !== toMove) {
      swap(array, leader, follower);
      follower++;
    }
    leader++;
  }

  return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
