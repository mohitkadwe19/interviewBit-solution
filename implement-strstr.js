function strStr(A, B) {

  if (A.length < B.length) {
    return -1;
  }

  if (A.length == 0 || B.length == 0) {
    return -1;
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] == B[0]) {
      let j = 1;
      while (j < B.length && A[i + j] == B[j]) {
        j++;
      }
      if (j == B.length) {
        return i;
      }
    }
  }
  return -1;

}

let A = "strstr", B = "str";
console.log(strStr(A, B));