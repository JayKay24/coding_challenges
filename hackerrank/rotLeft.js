function rotLeft(a, d) {
  for(let i = 0; i < d; i++) {
    let elem = a.shift();
    a.push(elem);
  }
  return a;
}

arr = rotLeft([1, 2, 3, 4, 5], 4);
