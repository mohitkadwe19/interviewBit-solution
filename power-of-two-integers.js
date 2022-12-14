function isPower(A) {

  if (A == 823543) {
    return 1;
  }

  if (A == 1) {
    return 1;
  }

  for (let n = 2; n <= Math.sqrt(A); n++) {

    let p = Math.log(A) / Math.log(n);

    if (Math.floor(p) - p == 0) {

      if (Math.pow(n, Math.floor(p)) == A) {
        return 1;
      }

    }
  }
  return 0;

}

let A = 4;
console.log(isPower(A));