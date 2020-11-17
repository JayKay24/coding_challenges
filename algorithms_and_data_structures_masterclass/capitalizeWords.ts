export const capitalizeWords = (
  stringArr: string[],
  idx: number = 0
): string[] => {
  let str = stringArr[idx];
  if (!str) return stringArr;
  str = `${str.toUpperCase()}`;
  stringArr[idx] = str;

  return capitalizeWords(stringArr, ++idx);
};

console.log(capitalizeWords(["i", "am", "learning", "recursion"]));
