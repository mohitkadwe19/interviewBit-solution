function titleToNumber(A) {

  let result = 0;
  let power = 0;
  for (let i = A.length - 1; i >= 0; i--) {
    result += (A.charCodeAt(i) - 64) * Math.pow(26, power);
    power++;
  }
  return result;

}

let A = "A";
console.log(titleToNumber(A));