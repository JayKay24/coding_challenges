const reverseString = (str: string): string => {
  if (str.length === 0) return "";
  return (
    str.charAt(str.length - 1) + reverseString(str.slice(0, str.length - 1))
  );
};

let revStr = reverseString("yoyo mastery");
console.log(revStr);
