function minRemoveToMakeValid(s: string): string {
  if (!s.length) return s;
  const sArr = s.split(""),
    stack: number[] = [];

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "(") {
      stack.push(i);
    } else if (sArr[i] === ")") {
      if (stack.length) {
        stack.pop();
      } else {
        sArr.splice(i, 1);
        i--;
      }
    }
  }

  if (stack.length) {
    let returnStr = "";
    for (let j = 0; j < sArr.length; j++) {
      if (j === stack[0]) {
        stack.shift();
      } else {
        returnStr += sArr[j];
      }
    }

    return returnStr;
  } else {
    return sArr.join("");
  }
}

// console.log(minRemoveToMakeValid("a)b(c)d"));
// console.log(minRemoveToMakeValid("))(("));
// console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
console.log(minRemoveToMakeValid("(a(b(c)d)"));
