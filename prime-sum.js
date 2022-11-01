class Solution {
  primesum(A) {
    const isPrime = (n) => {
      if (n < 2) return false;
      if (n === 2) return true;
      if (n % 2 === 0) return false;
      for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
      }
      return true;
    };
    for (let i = 2; i <= A / 2; i++) {
      if (isPrime(i) && isPrime(A - i)) {
        return [i, A - i];
      }
    }
  }
};

let solution = new Solution()
console.log(solution.primesum(4))