

function solve(A, B) {

  let n = A.length;
  let m = B.length;

  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);


  let max = A[0] ^ B[0];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      max = Math.max(max, A[i] ^ B[j]);
    }
  }

  return max;

}

let A = [1, 2, 3], B = [4, 1, 2];
console.log(solve(A, B)); 