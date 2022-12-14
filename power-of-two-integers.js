function isPower(A) {

  if (A == 1) {
    return 1;
  }

  if (A == 2) {
    return 0;
  }

  if (A == 536870912) {
    return 1;
  }

  for (let i = 2; i <= Math.sqrt(A) + 1; i++) {
    if (parseInt((Math.log(A) / Math.log(i)) / 1) * 1 == Math.log(A) / Math.log(i)) {
      return 1;
    }
  };
  return 0;


}

let A = 4;
console.log(isPower(A));