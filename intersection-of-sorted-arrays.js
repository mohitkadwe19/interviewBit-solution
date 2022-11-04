function intersect(A, B) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < A.length && j < B.length) {
    if (A[i] < B[j]) {
      i++;
    }
    else if (A[i] > B[j]) {
      j++;
    }
    else {
      result.push(A[i]);
      i++;
      j++;
    }
  }
  return result;
}

let A = [1, 2, 3, 3, 4, 5, 6], B = [3, 3, 5];
console.log(intersect(A, B));