// This is an input class. Do not edit.
class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

export function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree
) {
  let pathToDescendantOne: AncestralTree[] = [],
    pathToDescendantTwo: AncestralTree[] = [];

  let currentDescendant = descendantOne;
  while (currentDescendant) {
    pathToDescendantOne.unshift(currentDescendant);
    if (currentDescendant.ancestor) {
      currentDescendant = currentDescendant.ancestor;
    } else {
      break;
    }
  }

  currentDescendant = descendantTwo;

  while (currentDescendant) {
    pathToDescendantTwo.unshift(currentDescendant);
    if (currentDescendant.ancestor) {
      currentDescendant = currentDescendant.ancestor;
    } else {
      break;
    }
  }

  let descendantOnePointer = 0,
    descendantTwoPointer = 0,
    currentCommonAncestor: AncestralTree | null = null;

  while (true) {
    if (
      pathToDescendantOne[descendantOnePointer] &&
      pathToDescendantTwo[descendantTwoPointer]
    ) {
      if (
        pathToDescendantOne[descendantOnePointer].name !==
        pathToDescendantTwo[descendantTwoPointer].name
      ) {
        break;
      } else {
        currentCommonAncestor = pathToDescendantOne[descendantOnePointer];
        descendantOnePointer++;
        descendantTwoPointer++;
      }
    } else {
      break;
    }
  }

  return currentCommonAncestor;
}
