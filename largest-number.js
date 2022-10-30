class Solution {
  largestNumber(A) {
    A.sort((a, b) => {
      const ab = a + '' + b;
      const ba = b + '' + a;
      return ba - ab;
    });
    const result = A.join('');
    return result[0] === '0' ? '0' : result;
  }
};

let solution = new Solution();
let result = solution.largestNumber([3, 30, 34, 5, 9]);
console.log(result);