function counter(char, str) {
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    if(char === str[i]) count++;
  }
  return count;
}

function repeatedString(s, n) {
  let aCount = counter('a', s);
  if(aCount === 0) return 0;
  let substrCount = Math.floor(n / s.length);
  let substrRemainder = n % s.length;
  let remainderSubstr = s.slice(0, substrRemainder);
  return (aCount * substrCount) + counter('a', remainderSubstr);
}

occurances = repeatedString('a', 1000000000000);
