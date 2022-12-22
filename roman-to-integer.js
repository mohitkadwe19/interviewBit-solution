function romanToInt(A) {

  let roman = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };

  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    if (roman[A[i]] < roman[A[i + 1]]) {
      sum += roman[A[i + 1]] - roman[A[i]];
      i++;
    } else {
      sum += roman[A[i]];
    }
  }
  return sum;

}

let A = "XIV";
console.log(romanToInt(A));