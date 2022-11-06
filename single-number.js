function singleNumber(A) {
  let result = 0;
  for (var i = 0; i < A.length; i++) {
    result ^= A[i];
  }
  return result;
}

let A = [1, 2, 2, 3, 1];
console.log(singleNumber(A));