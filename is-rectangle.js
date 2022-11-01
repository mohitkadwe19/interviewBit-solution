class Solution {
  solve(A, B, C, D) {
    if (A == B && C == D || A == C && B == D || A == D && B == C)
      return 1;
    else
      return 0;
  }
}

let solution = new Solution();
console.log(solution.solve(1, 1, 2, 3));