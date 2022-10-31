class Solution {
  lengthOfLastWord(A) {
    let count = 0;
    let i = A.length - 1;
    while (i >= 0 && A[i] === ' ') {
      i--;
    }
    while (i >= 0 && A[i] !== ' ') {
      count++;
      i--;
    }
    return count;
  }
};

let A = "Hello World";
let solution = new Solution();
let result = solution.lengthOfLastWord(A);
console.log(result);