
class Solution {
  diagonal(A) {
    const result = [];
    const n = A.length;
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j <= i; j++) {
        row.push(A[j][i - j]);
      }
      result.push(row);
    }
    for (let i = 1; i < n; i++) {
      const row = [];
      for (let j = i; j < n; j++) {
        row.push(A[j][n - 1 - j + i]);
      }
      result.push(row);
    }
    return result;
  }
};


let A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

let solution = new Solution();
console.log(solution.diagonal(A));