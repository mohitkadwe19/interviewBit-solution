class Solution {

  removeDuplicates(A) {

    if (A.length === 0) {
      return 0;
    }

    let i = 0;
    for (let j = 1; j < A.length; j++) {
      if (A[j] !== A[i]) {
        i++;
        A[i] = A[j];
      }
    }

    return i + 1;

  }

}

let solution = new Solution();
console.log(solution.removeDuplicates([1, 1, 2]));