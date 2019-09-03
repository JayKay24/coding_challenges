function jumpingOnClouds(c) {
  let jumps = 0;
  for(let i = 0; i < c.length; i++) {
    if(i === c.length - 1) break;
    if(c[i] === 0 && c[i] !== c[i + 1] && c[i] === c[i + 2]) {
      jumps++;
      i++;
      continue;
    }
    if(c[i] === 0 && c[i + 1] === c[i + 2]) {
      jumps++;
      i++;
      continue;
    }
    if(c[i] === 0 && c[i] === c[i + 1]) {
      jumps++;
    }
  }
  return jumps;
}

jumps = jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])

