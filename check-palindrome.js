function solve(A) {

  let unordered_map = new Map();
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (unordered_map.has(A[i])) {
      unordered_map.set(A[i], unordered_map.get(A[i]) + 1);
    } else {
      unordered_map.set(A[i], 1);
    }
  }

  for (let [key, value] of unordered_map) {
    if (value % 2 !== 0) {
      count++;
    }
  }

  if (count > 1) {
    return 0;
  } else {
    return 1;
  }

}

let A = "abcde";
console.log(solve(A));