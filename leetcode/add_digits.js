const addDigits = (num) => {
  let result = 0;

  const breakDown = (numStr) => {
    if (numStr.length === 0) return 0;
    if (numStr.length === 1) {
      return Number(numStr);
    } else {
      return breakDown(numStr.charAt(0)) + breakDown(numStr.slice(1));
    }
  };

  result = breakDown(String(num));

  while (String(result).length > 1) {
    result = breakDown(String(result));
  }

  return Number(result);
};

let result = addDigits(38);
// let result = addDigits(199);
// let result = addDigits(10);
console.log(result);
