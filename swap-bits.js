function solve(A, B, C) {

  B -= 1;
  C -= 1;
  let bitB = 1 & (A >> B);
  let bitC = 1 & (A >> C);
  if (bitB != bitC) {
    A = A ^ (1 << B);
    A = A ^ (1 << C);
  }
  return A;

}

let A = 9, B = 1, C = 2;
console.log(solve(A, B, C));