
function solve(A, B) {


  B = Math.abs(B);

  // sort the array A
  A.sort((a, b) => a - b);

  let i = 0, j = 1;

  while (i < A.length && j < A.length) {
    if (j > i && A[j] - A[i] == B) {
      return 1;
    }
    if (j <= i || A[j] - A[i] < B) {
      j++;
    }
    else {
      i++;
    }

  }
  return 0;

}

let A = [5, 10, 3, 2, 50, 80], B = 78;
let result = solve(A, B);
console.log(result);