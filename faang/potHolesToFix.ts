export function solution(l1: string, l2: string): number {
  const lane1: boolean[] = new Array(l1.length).fill(false);
  const lane2: boolean[] = new Array(l2.length).fill(false);

  let currentLane: string;
  let potHolesToFix = 0;

  if (l1[0] === ".") {
    currentLane = "l1";
  } else if (l2[0] === ".") {
    currentLane = "l2";
  } else {
    if (l1[1] === ".") {
      currentLane = "l1";
    } else {
      currentLane = "l2";
    }
  }

  for (let i = 0; i < l1.length; i++) {
    if (l1[i] === ".") {
      lane1[i] = true;
    }
    if (l2[i] === ".") {
      lane2[i] = true;
    }

    if (i + 1 < l1.length) {
      if (currentLane === "l1") {
        if (l1[i] === "x") {
          if (l1[i + 1] === "x") {
            currentLane = "l2";
          } else {
            lane1[i] = true;
          }
        }
      } else {
        if (l2[i] === "x") {
          if (l2[i + 1] === "x") {
            currentLane = "l1";
          } else {
            lane2[i] = true;
          }
        }
      }
    }

    if (i + 2 < l1.length) {
      if (currentLane === "l1") {
        if (l1[i] === ".") {
          if (l1[i + 1] === "x") {
            if (l1[i + 2] === "x") {
              currentLane = "l2";
              lane2[i] = true;
            }
          }
        }
      } else {
        if (l2[i] === ".") {
          if (l2[i + 1] === "x") {
            if (l2[i + 2] === "x") {
              currentLane = "l1";
              lane1[i] = true;
            }
          }
        }
      }
    }

    if (i + 1 === l1.length) {
      if (currentLane === "l1") {
        if (l1[i] === "x") {
          lane1[i] = true;
        }
      }
      if (currentLane === "l2") {
        if (l2[i] === "x") {
          lane2[i] = true;
        }
      }
    }

    if (!lane1[i]) {
      potHolesToFix++;
    }
    if (!lane2[i]) {
      potHolesToFix++;
    }
  }

  console.log(lane1);
  console.log(lane2);

  return potHolesToFix;
}

// console.log(solution("..xx.x.", "x.x.x.."));
// console.log(solution(".xxx...x", "..x.xxxx"));
// console.log(solution("xxxxx", ".x..x"));
// console.log(solution("x...x", "..x.."));
console.log(solution("xxx.", "...x"));
const seen = new Set();