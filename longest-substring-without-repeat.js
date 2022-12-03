function lengthOfLongestSubstring(A) {

  let max = 0;
  let start = 0;
  let end = 0;
  let map = {};

  while (end < A.length) {
    let char = A[end];
    if (map[char] !== undefined) {
      start = Math.max(start, map[char] + 1);
    }
    map[char] = end;
    max = Math.max(max, end - start + 1);
    end++;
  }

  return max;

}

let A = "abcabcbb";
console.log(lengthOfLongestSubstring(A));