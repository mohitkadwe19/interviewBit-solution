class Solution {
  longestConsecutive(A) {

    const set = new Set(A);
    let count = 0;

    A.forEach(num => {
      if (!set.has(num - 1)) {
        let next = num + 1;
        while (set.has(next)) {
          next += 1;
        }
        count = Math.max(count, next - num);
      }
    });

    return count;
  }
};

let A = [100, 4, 200, 1, 3, 2];
let solution = new Solution();
let result = solution.longestConsecutive(A);
console.log(result);

