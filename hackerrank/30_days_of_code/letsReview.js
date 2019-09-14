function splitEvenAndOdd(input) {
  let inputArr = input.slice(input.indexOf('\n') + 1).split('\n');
  let even = '', odd = '', finalStr = '';
  inputArr.forEach(element => {
    for(let i = 0; i < element.length; i++) {
      if(i % 2 === 0) even += element[i];
      if(i % 2 !== 0) odd += element[i];
    }
    finalStr += `${even} ${odd}\n`
    even = '';
    odd = '';
  });
  console.log(finalStr.slice(0, -1));
}

splitEvenAndOdd('10\novyvzvptyvpvpxyztlrztsrztztqvrxtxuxq\nholtm\nuvzxrumuztyqyvpnji\ntmruzxzuwoskqysxztuvosuyrswrnmtxvzsrqwytzrxpltrwusxupw\nwxstwxuzuyuvyzrsxysxyuvyqxuxyskqwsyqumqrvopvowqumnvrxpwqpwsrnvrztxrxpvuxunvyzvupvupowvyzvzuzwvsrwv\nyrzxrxskrtlpwpmtpxvowrxrpxq\npryumtuntmovpwvowslj\nnosklrxrtyuxtmnurzsryuxtywqwqpxts\nfmpszyvqwxrtvpuwqszvyvotmsxsxuvzyvpwzrpmuxqwtswvytytzsnuxuyrpvtysqoutzurqxury\njkmsxzwrxzy');
