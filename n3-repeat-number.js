function solve(A) {

  let n = A.length;
  let limit = Math.floor(n / 3);

  if (n == 0) {
    return -1;
  }
  if (n == 1) {
    return A[0];
  }

  // copy A array into v
  let v = A.slice();

  // sort A
  v.sort((a, b) => a - b);

  for (let i = 0; i < n - limit; i++) {
    if (v[i] == v[i + limit]) {
      return v[i];
    }
  }
  return -1;

}

let A = [1, 1];
console.log(solve(A));