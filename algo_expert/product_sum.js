function productSum(specialArr, level = 1) {
  let currentSum = 0;
  for (let i = 0; i < specialArr.length; i++) {
    if (!Array.isArray(specialArr[i])) {
      currentSum += specialArr[i];
    } else {
      currentSum += productSum(specialArr[i], level + 1);
    }
  }

  return currentSum * level;
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
// console.log(productSum([[[[[5]]]]]));
