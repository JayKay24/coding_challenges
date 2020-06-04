const fruitsIntoBaskets = (fruits) => {
  let maxFruits = -Infinity,
    visited = {},
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    if (!visited[fruits[windowEnd]] && Object.keys(visited).length === 2) {
      delete visited[fruits[windowStart]];
      windowStart += 1;
    }

    maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
    visited[fruits[windowEnd]] = true;
  }

  return maxFruits;
};

console.log(fruitsIntoBaskets(["A", "B", "C", "A", "C"]));
console.log(fruitsIntoBaskets(["A", "B", "C", "B", "B", "C"]));
