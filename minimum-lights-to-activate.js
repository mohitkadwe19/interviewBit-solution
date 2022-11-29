function solve(A, B) {

  let lighted = 0, count = 0, prevLightPos = 0, nextLightPos = 0;

  if (A.length < B) {
    return 1;
  }

  while (lighted < A.length) {
    prevLightPos = nextLightPos;
    nextLightPos = lighted + B - 1;

    if (A[nextLightPos] === 1) {
      lighted = nextLightPos + B;
      count++;
    } else {
      let j = nextLightPos
      while (j > prevLightPos && A[j] !== 1) {
        j--;
      }
      if (j <= prevLightPos) {
        return -1;
      }
      count++

      prevLightPos = j

      lighted = j + B
    }
  }
  return count;

}
let A = [0, 0, 1, 1, 1, 0, 0, 1], B = 3;

solve(A, B);
console.log(A);