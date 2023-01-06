function solve(A, B) {

  let moves = 0;
  let x = A, y = B;
  while (x > 1 && y > 1) {
    x--;
    y--;
    moves++;
  }

  x = A, y = B;
  while (x > 1 && y < 8) {
    x--;
    y++;
    moves++;
  }

  x = A, y = B;
  while (x < 8 && y > 1) {
    x++;
    y--;
    moves++;
  }

  x = A, y = B;
  while (x < 8 && y < 8) {
    x++;
    y++;
    moves++;
  }

  return moves;

}

let A = 4, B = 4;
console.log(solve(A, B));