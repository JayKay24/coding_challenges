function processData(input) {
  let phoneNumbers = new Map();
  let inputArr = input.split('\n').slice(1);
  const spacedArr = inputArr.filter(elem => /\s+/.test(elem));
  const noneSpacedArr = inputArr.filter(elem => elem.indexOf(' ') === -1);
  for(let i of spacedArr) {
    let nameValueArr = i.split(' ');
    phoneNumbers.set(nameValueArr[0], nameValueArr[1]);
  }
  for(let i of noneSpacedArr) {
    if(phoneNumbers.has(i)) console.log(`${i}=${phoneNumbers.get(i)}`);
    if(!phoneNumbers.has(i)) console.log('Not found');
  }
}

processData('3\nsam 99912222\nharry');