function solve(A, B) {

  // Sort the array in descending order
  A.sort((a, b) => b - a);

  // Return the first B elements
  return A.slice(0, B);

}

let A = [11, 3, 4], B = 2;
console.log(solve(A, B));