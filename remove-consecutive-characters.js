
function solve(A, B) {

  let n = A.length, s = "", ans = [];

  ans.push(A[0]);

  for (let i = 1; i < n; i++) {

    if (A[i] == A[i - 1]) {

      ans.push(A[i]);

      if (ans.length == B) {
        ans = [];
      }

    }
    else {

      s += ans;

      ans = [];

      ans.push(A[i]);
    }

  }

  s += ans;

  return s;
}

let A = "aabcd", B = 2;
console.log(solve(A, B));