function collectStrings(obj) {
  let valStrings = [];
  
  function helper(objct) {
    for(let key in objct) {
      if (objct[key] === undefined) {
        return;
      } else if (typeof objct[key] === 'string') {
        valStrings.push(objct[key]);
      } else {
        helper(objct[key]);
      }
    }
  }

  helper(obj);
  return valStrings;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}
console.log(collectStrings(obj))