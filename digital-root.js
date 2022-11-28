function solve(A) {

  let temp = A % 9;
  return temp == 0 ? 9 : temp;

}

let A = 99;
console.log(solve(A));