function solve(A) {
  let count = 0;
  for (let i = 1; i <= A; i++) {
    for (let j = i; j <= A; j++) {
      let temp = i * i + j * j;
      if (Pythagorean(temp) && Math.sqrt(temp) <= A) count++;
    }
  }
  return count;
}
function Pythagorean(n) {
  let x = Math.floor(Math.sqrt(n));
  return x * x == n;
}

let A = 5;
console.log(solve(A));
