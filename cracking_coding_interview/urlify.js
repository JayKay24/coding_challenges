function URLify(str, strLength) {
  let trimmedStr = str.trim();
  return trimmedStr.replace(/\s/g, '%20');
}

console.log(URLify('Mr John Smith    '));
console.log(URLify('Trini dad'));