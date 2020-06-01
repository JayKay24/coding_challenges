let canWinNim = (n) => {
  let maxStones = 3;

  while (n > 0) {
    // for (let i = 0; i < maxStones; i++) {
    //   // if (n === 0) break;
    //   // if (n === 1) {
    //   //   return true;
    //   // }
    //   // n--;
    //   // if (n === 0) return true;
    //   // n--;

    // }
    if (n === 1) return true;
    n = Math.floor(n / 3);
    
    if (n === 1) return false;
    n = Math.floor(n / 3);



    // for (let j = 0; j < maxStones; j++) {
    //   // if (n === 0) break;
    //   // if (n === 1) {
    //   //   return false;
    //   // }
    //   // n--;
    //   // if (n === 0) return false;
    //   // n--;
    // }
  }
};

// console.log(canWinNim(4));
// console.log(canWinNim(1));
// console.log(canWinNim(5));
console.log(canWinNim(3));