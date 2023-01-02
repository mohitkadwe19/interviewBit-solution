//param A : integer
//param B : integer
//param C : integer
//return an integer
function solve(A, B, C) {

  let a = A, b = B;

  for (let i = 0; i < 10; i++) {
    if ((a + i) % 10 == C) a = a + i;
  }

  for (let i = 0; i < 10; i++) {
    if ((b - i) % 10 == C) b = b - i;
  }

  if (a > b) {
    return 0;
  }

  return (b - a) / 10 + 1;

}

let A = 11, B = 111, C = 1;
console.log(solve(A, B, C));