import { callWithInputReadFromFile } from "./readInputArrayFromFile";

export const tobogganPolicyValidCount = (pwdsAndPolicies: string[]) => {
  let validCount = 0;

  for (const pwdAndPolicy of pwdsAndPolicies) {
    const [positions, dirtyChar, password] = pwdAndPolicy.split(" ");
    const [policyChar] = dirtyChar.split("");
    const [startStr, endStr] = positions.split("-");
    const [start, end] = [parseInt(startStr), parseInt(endStr)];

    let startContainsChar: boolean, endContainsChar: boolean;

    startContainsChar = password[start - 1] === policyChar;
    endContainsChar = password[end - 1] === policyChar;

    const XOR = Number(startContainsChar) ^ Number(endContainsChar);

    if (XOR) validCount++;
  }

  return validCount;
};

callWithInputReadFromFile<string>(tobogganPolicyValidCount);
