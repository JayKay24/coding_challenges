const find_happy_number = function (num: number): boolean {
  const calculations: { [prop: number]: boolean } = {};
  let numStr = String(num),
    happy = false;

  const transformer = (char: string) => Number(char) ** 2;

  while (numStr.length > 0) {
    let sum = 0;
    for (const char of numStr) {
      let res = transformer(char);
      sum += res;
    }

    if (sum in calculations) return happy;

    calculations[sum] = true;

    if (sum === 1) {
      happy = true;
      break;
    }
    numStr = String(sum);
  }

  return happy;
};

console.log(`${find_happy_number(23)}`);
console.log(`${find_happy_number(12)}`);
