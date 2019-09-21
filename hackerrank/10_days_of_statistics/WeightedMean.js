function processData(input) {
  const arrLength = parseInt(input.split('\n')[0]);
  const inputArr = input.split('\n');
  const elementsArr = inputArr[1].split(' ').map(elem => parseInt(elem));
  const weightsArr = inputArr[2].split(' ').map(elem => parseInt(elem));
  const weightsSum = weightsArr.reduce((x, y) => x + y);
  let productSum = 0;
  for(let i = 0; i < arrLength; i++) {
    productSum += elementsArr[i]*weightsArr[i];
  }
  const weightedMean = Math.round((productSum / weightsSum) * 10) / 10;
  if(!/\./.test(weightedMean.toString())) {
    console.log(`${weightedMean}.0`);
  } else {
    console.log(weightedMean);
  }  
}

processData('5\n10 43 30 50 20\n1 2 3 4 5');
