
function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1) % 1000000007;
}



function solve(A) {

  let ans = (factorial(A) * 2) % 1000000007;
  return ans;

}
let A = 2;
console.log(solve(A));