function counter(elem, arr) {
  let count = 0;
  for(let i of arr) {
    if(elem === i) count++;
  }
  return count;
}

function processData(input) {
  let inputArr = input.split('\n');
  let total = parseInt(inputArr[0]);
  let values = inputArr.slice(1)[0].split(' ');
  let mean = Math.round((values.reduce((x, y) => parseFloat(x) + parseFloat(y)) / total) * 10) / 10;
  let inputArrSorted = values.map(x => parseFloat(x)).sort((x, y) => {
    if(x < y) return -1;
    if(x === y) return 0;
    return 1;
  });
  let median = 0;
  let midIndex = Math.floor(inputArrSorted.length / 2);
  if(inputArrSorted.length % 2 === 0) {
    median = (inputArrSorted[midIndex - 1] + inputArrSorted[midIndex]) / 2;
  } else {
    median = inputArrSorted[midIndex];
  }
  let inputArrSet = new Set(inputArrSorted);
  let count = 0;
  let mode = 0;
  let current = 0;
  for(let i of inputArrSet.values()) {
    let instances = counter(i, inputArrSorted);
    if(instances === count) current = i;
    if(instances > count) {
      count = instances;
      mode = i;
      current = i;
    }
  }
  console.log(mean);
  console.log(median);
  if(mode < current) console.log(mode);
  if(mode > current) console.log(current);
}

processData('10\n64630 11735 14216 99233 14470 4978 73429 38120 51135 67060');