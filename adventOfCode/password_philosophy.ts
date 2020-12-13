import { callWithInputReadFromFile } from "./readInputArrayFromFile";

export const howManyAreValid = (pwdsAndPolicies: string[]) => {
  let validCount = 0;

  outerLoop: for (const pwdAndPolicy of pwdsAndPolicies) {
    const [range, dirtyChar, password] = pwdAndPolicy.split(" ");
    const [policyChar] = dirtyChar.split("");
    const [minStr, maxStr] = range.split("-");
    const [min, max] = [parseInt(minStr), parseInt(maxStr)];

    let currentCount = 0;
    for (const char of password) {
      if (currentCount > max) continue outerLoop;
      if (char === policyChar) currentCount++;
    }

    const passwordIsValid = currentCount >= min && currentCount <= max;

    if (passwordIsValid) validCount++;
  }

  return validCount;
};

callWithInputReadFromFile<string>(howManyAreValid);
