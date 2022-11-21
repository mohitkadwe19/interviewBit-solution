function solve(A) {

  let stack = [];
  let open = ['(', '{', '['];
  let close = [')', '}', ']'];

  for (let i = 0; i < A.length; i++) {
    if (open.includes(A[i])) {
      stack.push(A[i]);
    } else {
      if (stack.length === 0) {
        return 0;
      }
      let last = stack.pop();
      if (open.indexOf(last) !== close.indexOf(A[i])) {
        return 0;
      }
    }
  }
  return stack.length === 0 ? 1 : 0;

}

let A = "(()())";
console.log(solve(A));