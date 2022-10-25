
class Solution {
  //param A : array of integers
  //return an integer
  maxSubArray(A) {
    let maxSum = A[0];
    let currentSum = A[0];
    for (let i = 1; i < A.length; i++) {
      currentSum = Math.max(A[i], currentSum + A[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
  }
};

let solution = new Solution();
console.log(solution.maxSubArray([1, 2, 3, 4, -10]));
