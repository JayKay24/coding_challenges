function isValid(s: string): boolean {
  const openers: { [prop: string]: string } = { "{": "}", "[": "]", "(": ")" },
    validator: string[] = [];

  for (const char of s) {
    if (Object.keys(openers).includes(char)) {
      validator.push(char);
    } else {
      let proposedKey: string;
      for (const [key, val] of Object.entries(openers)) {
        if (val === char) {
          proposedKey = key;
          break;
        }
      }

      let lastChar = validator[validator.length - 1];

      if (openers[lastChar] !== openers[proposedKey]) {
        return false;
      } else {
        validator.pop();
      }
    }
  }

  return validator.length ? false : true;
}

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
