function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length;
  const occurrences = new Map();
  let longestSubstring = -Infinity,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let currentChar = s.charAt(windowEnd);

    if (occurrences.get(currentChar) >= windowStart) {
      windowStart = occurrences.get(currentChar) + 1;
    }

    occurrences.set(currentChar, windowEnd);

    longestSubstring = Math.max(longestSubstring, windowEnd - windowStart + 1);
  }

  return longestSubstring === -Infinity ? 0 : longestSubstring;
}

console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("abba"));
