function maxset(A) {
  let maxSum = 0;
  let maxStart = 0;
  let maxEnd = 0;
  let currentSum = 0;
  let currentStart = 0;
  let currentEnd = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 0) {
      currentSum += A[i];
      currentEnd = i;
    } else {
      currentSum = 0;
      currentStart = i + 1;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxStart = currentStart;
      maxEnd = currentEnd;
    }
  }

  return A.slice(maxStart, maxEnd + 1);
}

let A = [-1, -1, -1, -1, -1];
console.log(maxset(A));