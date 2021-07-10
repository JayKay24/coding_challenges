export function firstNonRepeatingCharacter(str: string) {
  if (!str.length) return 0;
  let first = 0;
  const seen: Set<string> = new Set();

  for (let i = 0; i < str.length; i++) {
    if (seen.has(str[i])) {
      while (seen.has(str[first])) {
        first++;
      }
    }

    if (first >= 0 && first + 1 < str.length) {
      while (str[first] === str[first + 1]) {
        first++;
        i = first - 1;
      }
      if (str[first] === str[first - 1]) {
        first++;
        i = first - 1;
      }
    }

    seen.add(str[i]);
  }

  return first >= str.length ? -1 : first;
}

console.log(firstNonRepeatingCharacter("abcdcaf"));
