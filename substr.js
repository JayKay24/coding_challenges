const str1 = "abcdefgh";
const pattern = "cde";

let windowStart = 0;

for (let windowEnd = 0; windowEnd < str1.length; windowEnd++) {
  if (windowEnd - windowStart >= pattern.length - 1) {
    let result = str1.slice(windowStart, windowEnd + 1);
    console.log(result);
  }

  if (windowEnd - windowStart >= pattern.length - 1) windowStart++;
}
