function bulbs(A) {

  let count = 0;
  let state = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === state) {
      count++;
      state = 1 - state;
    }
  }
  return count;

}

let A = [0, 1, 0, 1];
console.log(bulbs(A));