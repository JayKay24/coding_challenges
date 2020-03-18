function convertBinStrToInt(str) {
  let finalInt = 0;
  let exponentCount = 0
  for (let i = str.length - 1; i >= 0; i--) {
    let currentBinToInt = Math.pow(2, exponentCount) * parseInt(str[i]);
    finalInt += currentBinToInt;
    exponentCount++;
  }
  return finalInt;
}

function solution(binStr) {
  // let num = parseInt(binStr, 2);
  // let num = convertBinStrToInt(binStr);
  let num = Math.pow(10, 301);
  let steps = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
      steps++;
    } else {
      num -= 1;
      steps++;
    }
  }
  return steps;
}

console.log(solution('011100'));
// console.log(solution('00001111000110000011100011111110000111111110000'));
// console.log(convertBinStrToInt('10010'));
// console.log(solution(1212));