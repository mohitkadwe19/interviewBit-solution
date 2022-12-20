function maximumGap(A) {

  let n = A.length;
  let maxi = new Array(n);
  maxi[n - 1] = A[n - 1];
  let ans = 0;
  for (let i = n - 2; i >= 0; i--) {
    maxi[i] = Math.max(maxi[i + 1], A[i]);
  }
  for (let i = 0; i < n - 1; i++) {
    let val = -1;
    let l = i + 1, r = n - 1;
    while (l <= r) {
      let mid = (l + r) / 2;
      if (maxi[mid] >= A[i]) {
        val = mid;
        l = mid + 1;
      }
      else {
        r = mid - 1;
      }
    }
    if (val != -1) {
      ans = Math.max(ans, val - i);
    }
  }
  return ans;

}

let A = [3, 5, 4, 2];
console.log(maximumGap(A));