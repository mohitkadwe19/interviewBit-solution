function solve(A) {

  let x, count = 0;
  while (A != 0) {
    //if last bit is 0 then x will be 0 otherwise x will be 1
    x = A & 1;
    //checking last digit
    if (x == 0) {
      count++;
    }
    else {
      break;
    }
    //performing right shift by 1
    A = A >> 1;
  }
  return count;
}

let A = 18;
console.log(solve(A));