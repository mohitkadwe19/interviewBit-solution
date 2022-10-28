class Solution {
  twoSum(A, B) {
    let map = {};
    for (let i = 0; i < A.length; i++) {
      let component = B - A[i];
      if (map[component]) {
        return [map[component], i + 1];
      }
      else if (!map[A[i]]) {
        map[A[i]] = i + 1;
      }
    }
    return [];
  }
};


let A = [2, 7, 11, 15], target = 9;
let solution = new Solution();
let result = solution.twoSum(A, target);
console.log(result);