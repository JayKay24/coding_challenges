function conditionals(n) {
  let answer = '';
  if(n % 2 !== 0) {
    answer = 'Weird';
  } else {
    if(n >= 2 && n <= 5) answer = 'Not Weird';
    if(n >= 6 && n <= 20) answer = 'Weird';
    if(n > 20) answer = 'Not Weird';
  }    
  return  answer;
}

str = conditionals(24);
