function solution(arr) {
  let pairs = 0;
  const maxPairs = Math.pow(10, 9);

  for (let i = 0; i < arr.length; i++) {
    if (pairs > maxPairs) return maxPairs;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]) pairs++;
    }
  }
  return pairs;
}

console.log(solution([3, 5, 6, 3, 3, 5]));
console.log(solution([3, 5, 6, 3, 3, 5, 5]));