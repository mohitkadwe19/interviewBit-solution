function solve(A, B) {

  let ans = A, n = B;

  for (let i = 1; i < n; i++) {
    if (ans % 2 == 0) {
      ans = ans / 2;
    }
    else {
      ans = 3 * ans + 1;
    }

  }
  return ans;

}

let A = 1, B = 3;
console.log(solve(A, B));