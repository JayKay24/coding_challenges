const searchTriplets = (arr) => {
  let triplets = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    if (i === 0 || (i > 0 && arr[i] !== arr[i - 1])) {
      let left = i + 1;
      let right = arr.length - 1;
      let sum = 0 - arr[i];

      while (left < right) {
        if (arr[left] + arr[right] === sum) {
          triplets.push([arr[i], arr[left], arr[right]]);

          while (left < right && arr[left] === arr[left + 1]) left++;
          while (left < right && arr[right] === arr[right - 1]) right--;
          left++;
          right--;
        } else if (arr[left] + arr[right] > sum) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return triplets;

} 

// console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(searchTriplets([-5, 2, -1, -2, 3]));
