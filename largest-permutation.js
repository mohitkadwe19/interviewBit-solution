function solve(A, B) {

  let n = A.length;
  let pos = new Array(n + 1);
  for (let i = 0; i < n; i++) {
    pos[A[i]] = i;
  }

  for (let i = 0; i < n && B > 0; i++) {
    if (A[i] != n - i) {
      let temp = A[i];
      A[i] = A[pos[n - i]];
      A[pos[n - i]] = temp;

      pos[temp] = pos[n - i];
      pos[n - i] = i;

      B--;
    }
  }

  return A;

}

let A = [1, 2, 3, 4], B = 1;
console.log(solve(A, B));
