/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = (num) => {
    let builtArr = [];
    for (let i = 1; i < num + 1; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        builtArr.push('FizzBuzz');
      } else if (i % 5 === 0) { 
        builtArr.push('Buzz');
      } else if (i % 3 === 0) {
        builtArr.push('Fizz');
      } else {
        builtArr.push(i.toString());
      };
    }
    return builtArr;
};

console.log(fizzBuzz(15));
console.log(fizzBuzz(1));