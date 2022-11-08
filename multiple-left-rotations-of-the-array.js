function solve(A, B) {
  let R = []

  let k = A.length;

  for (let i = 0; i < B.length; i++) {
    x = B[i] % k
    R.push(A.slice(x).concat(A.slice(0, x)))
  }

  return R;
}
let A = [1, 2, 3, 4, 5];
let B = [2, 3];
console.log(solve(A, B));