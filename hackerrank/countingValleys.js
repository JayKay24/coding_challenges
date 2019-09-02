// https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function countingValleys(n, s) {
  let seaLevel = 0;
  let valleyCount = 0;
  for(let i = 0; i < s.length; i++) {
    if(s[i] === 'D') seaLevel--;
    if(s[i] === 'U') seaLevel++;
    if(seaLevel === 0 && s[i] === 'U') valleyCount++;
  }
  return valleyCount;
}

count = countingValleys(8, 'UDDDUDUU');
console.log(count);