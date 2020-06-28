const makeSquares = (arr) => {
  let squares = [],
    previousSquare = arr[0] ** 2;

  squares.push(previousSquare);

  for (let i = 1; i < arr.length; i++) {
    let currentSquare = arr[i] ** 2;

    if (currentSquare > previousSquare) {
      if (currentSquare < squares[squares.length - 1]) {
        squares = squares
          .slice(0, squares.length - 1)
          .concat([currentSquare, squares[squares.length - 1]]);
      } else {
        squares.push(currentSquare);
      }
    } else {
      squares = [currentSquare].concat(squares);
    }

    previousSquare = currentSquare;
  }

  return squares;
};

console.log(makeSquares([-2, -1, 0, 2, 3]));
console.log(makeSquares([-3, -1, 0, 1, 2]));
