const bracketPairs = [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
];

const isOpen = (term: string) => {
  for (const pair of bracketPairs) {
    if (pair[0] === term) {
      return true;
    }
  }

  return false;
};

const isClosing = (term: string) => {
  for (const pair of bracketPairs) {
    if (pair[1] === term) {
      return true;
    }
  }

  return false;
};

const matches = (term: string, char: string) => {
  for (const pair of bracketPairs) {
    if (pair[0] === term && pair[1] === char) {
      return true;
    }
  }
  return false;
};

export function balancedBrackets(string: string) {
  const stack: string[] = [];

  for (const char of string) {
    if (isOpen(char)) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }

      if (isClosing(char)) {
        let topChar = stack.pop();

        if (topChar && !matches(topChar, char)) {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
}

let res = balancedBrackets("(a)");
console.log(res);
