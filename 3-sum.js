function threeSumClosest(A, B) {

  let minDiff = Number.MAX_SAFE_INTEGER;
  let result = 0;

  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    let j = i + 1;
    let k = A.length - 1;

    while (j < k) {
      let sum = A[i] + A[j] + A[k];
      let diff = Math.abs(sum - B);

      if (diff === 0) {
        return sum;
      }

      if (diff < minDiff) {
        minDiff = diff;
        result = sum;
      }

      if (sum <= B) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;

}

let A = [-1, 2, 1, -4], B = 1;
console.log(threeSumClosest(A, B));
