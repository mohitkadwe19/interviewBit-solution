function convertToTitle(A) {

  let result = '';
  let remainder = 0;
  let quotient = 0;

  while (A > 0) {
    remainder = A % 26;
    quotient = Math.floor(A / 26);

    if (remainder === 0) {
      result = 'Z' + result;
      A = quotient - 1;
    } else {
      result = String.fromCharCode(remainder + 64) + result;
      A = quotient;
    }
  }

  return result;

}

let A = 28;
console.log(convertToTitle(A));