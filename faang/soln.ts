function solution(l1: string, l2: string): number {
  const lane1: boolean[] = new Array(l1.length).fill(false);
  const lane2: boolean[] = new Array(l2.length).fill(false);

  let currentLane = l1[0] === "." || l1[1] === "x" ? "l1" : "l2";

  for (let i = 0; i < l1.length; i++) {
    if (l1[i] === ".") {
      lane1[i] = true;
    }

    if (l2[i] === ".") {
      lane2[i] = true;
    }

    if (i + 1 < l1.length && i - 1 >= 0) {
      if (l1[i] === "x") {
        if (l1[i + 1] === "." || l1[i - 1] === ".") {
          if (l2[i] === "x" && (l2[i + 1] === "x" || l2[i - 1] === "x")) {
            lane1[i] = true;
            currentLane = "l1";
          } else if (l2[i] === "." && l2[i + 1] === ".") {
            currentLane = "l2";
          }
        }
      }

      if (l2[i] === "x") {
        if (l2[i + 1] === "." || l2[i - 1] === ".") {
          if (l1[i] === "x" && (l1[i + 1] === "x" || l1[i - 1] === "x")) {
            lane2[i] = true;
            currentLane = "l2";
          } else if (l1[i] === "." && l1[i + 1] === ".") {
            currentLane = "l1";
          }
        }
      }
    }

    console.log(currentLane);

    if (i + 1 === l1.length) {
      if (l1[i] === "x" && currentLane === "l1") {
        lane1[i] = true;
      }

      if (l2[i] === "x" && currentLane === "l2") {
        lane2[i] = true;
      }
    }
  }

  console.log(lane1);
  console.log(lane2);

  return 1;
}

// solution("..xx.x.", "x.x.x..");
// solution('.xxx...x', '..x.xxxx');
solution('xxxxx', '.x..x');
// solution('x...x', '..x..');
