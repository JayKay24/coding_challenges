type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  const triplets = [];
  array.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let sum = num + array[left] + array[right];
      if (sum === targetSum) {
        let triplet: Triplet = [num, array[left], array[right]];
        triplets.push(triplet);
        left++;
        right--;
      } else if (sum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
