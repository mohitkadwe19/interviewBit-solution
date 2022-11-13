function numSetBits(A) {

  let count = 0;
  while (A != 0) {
    A = A & A - 1;
    count++;
  }
  return count;

}

let A = 11;
let result = numSetBits(A);
console.log(result);
