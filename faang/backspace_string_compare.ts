// function backspaceCompare(S: string, T: string): boolean {
//   const sArr: string[] = [],
//     tArr: string[] = [];

//   const populateArr = (
//     charArr: string[],
//     str: string,
//     compareChar: string
//   ): void => {
//     for (let i = 0; i < str.length; i++) {
//       if (str.charAt(i) === compareChar) {
//         charArr.pop();
//       } else {
//         charArr.push(str.charAt(i));
//       }
//     }
//   };

//   populateArr(sArr, S, "#");
//   populateArr(tArr, T, "#");

//   if (sArr.length !== tArr.length) {
//     return false;
//   } else {
//     for (let k = 0; k < sArr.length; k++) {
//       if (sArr[k] !== tArr[k]) {
//         return false;
//       }
//     }

//     return true;
//   }
// }

function backspaceCompare(S: string, T: string): boolean {
  let p1 = S.length - 1,
    p2 = T.length - 1,
    p1BackCount = 0,
    p2BackCount = 0;

  while (p1 >= 0 || p2 >= 0) {
    if (S.charAt(p1) === "#" || T.charAt(p2) === "#") {
      if (S.charAt(p1) === "#") {
        p1BackCount += 2;

        while (p1BackCount > 0) {
          p1--;
          p1BackCount--;

          if (S.charAt(p1) === "#") {
            p1BackCount += 2;
          }
        }
      }

      if (T.charAt(p2) === "#") {
        p2BackCount += 2;

        while (p2BackCount > 0) {
          p2--;
          p2BackCount--;

          if (T.charAt(p2) === "#") {
            p2BackCount += 2;
          }
        }
      }
    } else {
      if (S.charAt(p1) !== T.charAt(p2)) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }

  return true;
}

console.log(backspaceCompare("ab#c", "ad#c"));
