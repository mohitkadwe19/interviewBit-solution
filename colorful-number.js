function colorful(A) {

  let set = new Set();
  let s = A.toString();
  for (let i = 0; i < s.length; i++) {
    let prod = 1;
    for (let j = i; j < s.length; j++) {
      prod *= s[j];
      if (set.has(prod)) {
        return 0;
      }
      set.add(prod);
    }
  }
  return 1;
}

let A = 123;
console.log(colorful(A));