// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/typescript

// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

export function xo(str: string): boolean {
  const lower: string = str.toLowerCase();
  if (!/[xo]/.test(lower)) return true;
  if(!/[x]/.test(lower) || !/[o]/.test(lower)) return false;
  let xCount: number = 0, oCount: number = 0;
  for(let i of lower) {
    if(i === 'x') xCount++;
    if(i === 'o') oCount++;
  }
  return xCount === oCount;
}

let h = xo('xoibit');
console.log('u');