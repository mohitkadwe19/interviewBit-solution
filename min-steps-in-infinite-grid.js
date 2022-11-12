function coverPoints(A, B) {

  let steps = 0;
  for (let i = 0; i < A.length - 1; i++) {
    steps += Math.max(Math.abs(A[i] - A[i + 1]), Math.abs(B[i] - B[i + 1]));
  }
  return steps;

}

let A = [0, 1, 1], B = [0, 1, 2];
console.log(coverPoints(A, B));