// smallest missing positive integer not in the array,greater than zero

const smallestMissingPositveInt = (array: number[]): number => {
  let alreadyVisited: { [prop: number]: boolean } = {},
    minimum = Infinity;

  for (const num of array) {
    if (num in alreadyVisited) continue;
    let absDifference = Math.abs(num) - num;
    if (absDifference > 0 && !(absDifference in alreadyVisited)) {
      minimum = Math.min(absDifference, minimum);
      alreadyVisited[absDifference] = true;
    }
    alreadyVisited[num] = true;
  }

  return minimum;
};

export let res = smallestMissingPositveInt([-1, -3]);
console.log(res);

[1, 3, 6, 1, 2, 4]; // 5;
[-1, -3]; // 1
[1, 2, 3]; //4

// TO BE CONTINUED...
