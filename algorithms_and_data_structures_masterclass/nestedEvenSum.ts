export const nestedEvenSum = (obj: any, result: number = 0): number => {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      if (obj[key] % 2 === 0) result += obj[key];
    } else {
      return nestedEvenSum(obj[key], result);
    }
  }

  return result;
};

let res = nestedEvenSum({
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
});
console.log(res);
