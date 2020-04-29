function nestedEvenSum(obj) {
  let even = 0;

  function helper(objct) {
    for (let key in objct) {
      if (objct[key] === undefined) {
        return;
      } else if (objct[key] % 2 === 0) {
        even += objct[key];
      } else if (objct[key] instanceof Object) {
        helper(objct[key]);
      }
    }
  }

  helper(obj);
  return even;
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

const obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));