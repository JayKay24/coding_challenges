function solution(N) {
  if (typeof N === "number") { 
    let strN = N.toString();
    if (strN.length < 2) return 0;
    return parseInt(strN.charAt(0)) * Math.pow(10, strN.length - 1);
    // return parseInt(`${strN.charAt(0)}${'0'.repeat(strN.length - 1)}`);
  }
}

console.log(solution(125));
console.log(solution(3121));
console.log(solution(Math.pow(10, 9)));
console.log(solution(10));
console.log(solution(8));
console.log(solution(1));
console.log(solution(101));
console.log(solution(10000));
// n = 11 - 100
// n = 101 - 1000
