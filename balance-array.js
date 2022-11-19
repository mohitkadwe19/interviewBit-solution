function solve(a) {

  let e = 0, o = 0;

  let n = a.length;

  for (let i = 0; i < n; i++) {

    if (i % 2 == 0)

      e += a[i];

    else

      o += a[i];

  }

  let sum = o + e;

  let ans = 0;

  for (let i = 0; i < n; i++) {

    let x = a[i];

    sum -= x;

    o = sum - o;

    e = sum - o;

    if (e == o)

      ans++;

    sum += x;

  }

  return ans;


}

let A = [2, 1, 6, 4];
console.log(solve(A));