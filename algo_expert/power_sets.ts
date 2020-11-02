export function powerset(array: number[]) {
  let finalPowerSet: number[][] = [];
  finalPowerSet = [[]];

  for (const num of array) {
    let newPowerSet = [...finalPowerSet];

    newPowerSet = newPowerSet.map((item) => [...item, num]);
    finalPowerSet = [...finalPowerSet, ...newPowerSet];
  }

  return finalPowerSet;
}

let res = powerset([1, 2, 3]);
console.log(res);
