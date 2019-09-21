function processData(input) {
  const inputArr = input.split('\n');
  const arrLength = parseInt(inputArr[0]);
  let arrElements = inputArr[1].split(' ').map(elem => parseInt(elem)).sort((a, b) => {
    if(a < b) return -1;
    if(a === b) return 0;
    if(a > b) return 1;
  });
  let Q1 = 0, median = 0, Q3 = 0;
  if(arrLength % 2 !== 0) {
    median = arrElements[(arrLength - 1) / 2];
    const firstHalf = arrElements.slice(0, (arrLength / 2));
    const lastHalf = arrElements.slice((arrLength / 2) + 1);
    Q1 = (firstHalf[(firstHalf.length / 2) - 1] + firstHalf[firstHalf.length / 2]) / 2;
    Q3 = (lastHalf[(lastHalf.length / 2) - 1] + lastHalf[lastHalf.length / 2]) / 2;
  } else {
    median = (arrElements[(arrLength / 2) - 1] + arrElements[arrLength / 2]) / 2;
    const firstHalf = arrElements.slice(0, (arrLength / 2));
    const lastHalf = arrElements.slice((arrLength / 2));
    if(firstHalf.length % 2 !== 0) {
      Q1 = firstHalf[(firstHalf.length - 1) / 2];
      Q3 = lastHalf[(lastHalf.length- 1) / 2];
    } else {
      Q1 = (firstHalf[(firstHalf.length / 2) - 1] + firstHalf[firstHalf.length / 2]) / 2;
      Q3 = (lastHalf[(lastHalf.length / 2) - 1] + lastHalf[lastHalf.length / 2]) / 2;
    }
  }
  console.log(Math.floor(Q1));
  console.log(Math.floor(median));
  console.log(Math.floor(Q3));
}

processData('12\n4 17 7 14 18 12 3 16 10 4 4 12');