export function hasSingleCycle(array: number[]) {
  let currentIdx = 0,
    numElementsVisited = 0;

  const START_POINTER = 0;

  const getNextIdx = (currentIdx: number): number => {
    let jump = array[currentIdx],
      nextIdx = (currentIdx + jump) % array.length;

    return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
  };

  while (numElementsVisited < array.length) {
    if (numElementsVisited > 0 && currentIdx === START_POINTER) return false;

    numElementsVisited += 1;
    currentIdx = getNextIdx(currentIdx);
  }

  return currentIdx === START_POINTER;
}

// let res = hasSingleCycle([2, 3, 1, -4, -4, 2]);
let res = hasSingleCycle([2, 2, -1]);
console.log(res);
