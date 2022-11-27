function solve(A, B) {

  let sum = 0;
  let start = 0;
  for (let i = A; i <= B; i++) {
    if (i % 7 == 0) {
      start = i;
      break;
    }
  }
  let end = 0;
  for (let i = B; i >= A; i--) {
    if (i % 7 == 0) {
      end = i;
      break;
    }
  }
  let n = (end - start) / 7;
  let m = n + 1;
  sum = m * (start + end) / 2;
  return sum;

}

let A = 1, B = 7;
console.log(solve(A, B));