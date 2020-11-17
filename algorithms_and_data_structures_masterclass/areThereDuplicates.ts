export const areThereDuplicates = (...args: number[]) => {
  if (args.length === 1) {
    return 1;
  }

  let follower = 0;

  for (let leader = 1; leader < args.length; leader++) {
    if (args[leader] !== args[leader - 1]) {
      follower++;
      [args[leader], args[follower]] = [args[follower], args[leader]];
    } else {
      return true;
    }
  }

  return false;
};

let res = areThereDuplicates(1, 2, 3);
console.log(res);
