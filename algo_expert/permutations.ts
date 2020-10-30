export function getPermutations(
  array: number[],
  set: number[] = [],
  result: number[][] = []
) {
  if (!array.length) {
    if (set.length) {
      result.push([...set]);
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      const newNums = array.filter((n, idx) => idx !== i);
      set.push(array[i]);
      getPermutations(newNums, set, result);
      set.pop();
    }
  }

  return result;
}

let res = getPermutations([]);
console.log(res);
