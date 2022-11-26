function climbStairs(A) {

  // Base cases
  if (A < 3) {
    return A;
  }
  else {
    // Recursive case
    return climbStairs(A - 1) + climbStairs(A - 2);
  }

}

let A = 2;
console.log(climbStairs(A));