function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let greatest = Math.max(...A);
  let lowest = Math.min(...A);
  greatest -= 1;
  lowest += 1;
  while (greatest > 0) {
      if (!A.includes(greatest)) return greatest; 
      greatest -= 1;
  }

  while (lowest > 0) {
      if (!A.includes(lowest)) return lowest;
      lowest += 1;
  }
  return 1;
}

console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));