function stringifyNumbers(obj) {
  let finalObj = JSON.parse(JSON.stringify(obj));

  function helper(objct) {
    for (let key in objct) {
      if (objct[key] === undefined) {
        break;
      } else if (typeof objct[key] === 'number') {
        objct[key] = objct[key].toString();
      } else if (objct[key] instanceof Object) {
        helper(objct[key]);
      } 
    }
  }

  helper(finalObj);
  return finalObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}
let final = stringifyNumbers(obj);
console.log(final);