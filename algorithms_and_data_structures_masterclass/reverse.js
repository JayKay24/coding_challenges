function reverse(str) {
  if (str.length === 1) return str;
  let lastChar = str.charAt(str.length - 1);
  let restOfStr = str.slice(0, -1);
  return reverse(lastChar).concat(reverse(restOfStr));
}

console.log(reverse('rithmschool'));