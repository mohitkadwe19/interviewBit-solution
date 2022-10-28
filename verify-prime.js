
class Solution {
  isPrime(A) {
    if (A <= 1) {
      return 0;
    }
    for (let i = 2; i <= Math.sqrt(A); i++) {
      if (A % i === 0) {
        return 0;
      }
    }
    return 1;
  }
};

let solution = new Solution();
console.log(solution.isPrime(7));