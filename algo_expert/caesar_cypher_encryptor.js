const caesarCypherEncryptor = (string, key) => {
  if (key <= 0) return string;
  let rangeStart = 97;
  let rangeEnd = 97 + 25;
  let finalStr = "";
  for (let char of string) {
    let charCode = char.charCodeAt();
    let finalCharCode = "";
    let finalChar = "";
    wrapped = false;
    for (let i = 0; i < key; i++) {
      !wrapped
        ? (finalCharCode = charCode + i + 1)
        : (finalCharCode = finalCharCode + 1);
      if (finalCharCode > rangeEnd) {
        finalCharCode = rangeStart;
        finalChar = String.fromCharCode(finalCharCode);
        wrapped = true;
      } else {
        finalChar = String.fromCharCode(finalCharCode);
      }
    }
    finalStr += finalChar;
  }

  return finalStr;
};

// let res = caesarCypherEncryptor("xyz", 2);
let res = caesarCypherEncryptor("abc", 0);
console.log(res);
