// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/typescript
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. 
// And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

export function findMissingLetter(array: string[]): string {
  let alpha: string = 'abcdefghijklmnopqrstuvwxyz';
  if (array[0] === array[0].toUpperCase()){
    alpha = alpha.toUpperCase();
  }
  const arraySubstr = array.join('');
  const index = alpha.indexOf(arraySubstr.charAt(0));
  const slicedAlpha = alpha.slice(index, index + arraySubstr.length + 1);
  for(let i = 0; i < arraySubstr.length; i++) {
    if(slicedAlpha[i] !== arraySubstr[i]) return slicedAlpha[i];
  }
}

let letter = findMissingLetter(['O','Q','R','S']);
console.log('done');
