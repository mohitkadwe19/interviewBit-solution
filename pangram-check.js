function solve(A) {

  let charr = A.join('');
  console.log(charr);
  let HashMap = new Map();
  for (let i = 0; i < charr.length; i++) {
    HashMap.set(charr[i], 1);
  }

  if (HashMap.size == 26) {
    return 1;
  }
  return 0;
}

let A = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
console.log(solve(A));