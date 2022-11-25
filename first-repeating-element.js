function solve(A) {

  let map = new Map();

  for (let i = 0; i < A.length; i++) {
    if (map.has(A[i])) {
      map.set(A[i], map.get(A[i]) + 1);
    }
    else {
      map.set(A[i], 1);
    }
  }

  for (let i = 0; i < A.length; i++) {
    if (map.get(A[i]) > 1) {
      return A[i];
    }
  }

  return -1;

}

let A = [10, 5, 3, 4, 3, 5, 6];
console.log(solve(A));
