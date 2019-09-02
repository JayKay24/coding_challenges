// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. 
// Given an array of integers representing the color of each sock, determine 
// how many pairs of socks with matching colors there are.

// For example, there are n=7 socks with colors ar=[1,2,1,2,1,3,2]. There is one pair of color 1 and one of color 2. 
// There are three odd socks left, one of each color. The number of pairs is 2.

function counter(elem, arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(elem === arr[i]) count++;
  }
  return count;
}

function sockMerchant(n, ar) {
  let setAr = new Set(ar);
  let countEven = 0;
  for(let i of setAr) {
    let iMode = counter(i, ar);
    countEven += Math.floor(iMode / 2);
  }
  return countEven;
}

const pair = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log(pair);