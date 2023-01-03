function solve(A) {

  let flag1 = 0;
  let flag2 = 0;
  let flag3 = 0;
  let flag4 = 0;
  let flag5 = 0;

  if (A.length >= 8 && A.length <= 15) {
    flag2 = 1;
  }
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= '0' && A[i] <= '9') {
      flag1 = 1;
    }
    if ((A[i]) >= 'a' && (A[i]) <= 'z') {
      flag3 = 1;
    }
    if ((A[i]) >= 'A' && (A[i]) <= 'Z') {
      flag4 = 1;
    }
    if (A[i] == '@' || A[i] == '#' || A[i] == '%' || A[i] == '&' || A[i] == '!' || A[i] == '$' || A[i] == '*') {
      flag5 = 1;
    }
  }
  if (flag1 == 1 && flag2 == 1 && flag3 == 1 && flag4 == 1 && flag5 == 1) {
    return 1;
  }
  else {
    return 0;
  }

}

let A = ['S', 'c', 'a', 'l', 'e', 'r', '@', '1'];
console.log(solve(A));