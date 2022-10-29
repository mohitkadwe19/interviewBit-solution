class Solution {
  countAndSay(A) {
    let result = '';
    let count = 1;
    for (let i = 0; i < A; i++) {
      if (i === 0) {
        result = '1';
      } else {
        let temp = '';
        for (let j = 0; j < result.length; j++) {
          if (result[j] === result[j + 1]) {
            count++;
          } else {
            temp += count + result[j];
            count = 1;
          }
        }
        result = temp;
      }
    }
    return result;
  }
};

let solution = new Solution();
console.log(solution.countAndSay(2));