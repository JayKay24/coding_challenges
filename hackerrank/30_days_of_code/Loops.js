function printMultiples(num) {
  let arrStr = [];
  for(let i = 0; i < 10; i++) {
    arrStr.push(`${num} x ${i+1} = ${num * (i+1)}`);
  }
  console.log(arrStr.join('\n'))
}

printMultiples(2);
