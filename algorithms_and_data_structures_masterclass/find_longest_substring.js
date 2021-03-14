function findLongestSubstring(str) {
  if (str.length === 0) return 0;
  if (str.length === 1) return 1;

  let longest = 0;
  let uniques = {};
  let counter = 0;
  while (str.length > 1) {
    uniques[str[counter]] = (uniques[str[counter]] || 0) + 1;
    if (uniques[str[counter]] > 1) {
      longest = Math.max(longest, counter);
      const firstOccurance = str.indexOf(str[counter]);
      str = str.slice(firstOccurance + 1);
      counter = 0;
      uniques = {};
      continue;
    }
    str = str.slice(1);
    counter++;
  }
  return longest;
}

console.log(findLongestSubstring("dvdf"));
