export function countUniqueValues(arr: number[]) {
  if (!arr.length) {
    return 0;
  } else if (arr.length === 1) {
    return 1;
  } else {
    let follower = 0;

    for (let leader = 1; leader < arr.length; leader++) {
      if (arr[leader] !== arr[leader - 1]) {
        follower++;
        [arr[follower], arr[leader]] = [arr[leader], arr[follower]];
      }
    }
    return follower > 0 ? follower + 1 : follower;
  }
}

let res = countUniqueValues([-2, -1, -1, 0, 1]);
console.log(res);
