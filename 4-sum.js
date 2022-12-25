function twoSum(result, nums, i, j, n, target) {
  let k = j + 1, l = n - 1;
  while (k < l) {
    if (nums[k] + nums[l] > target) { l--; }
    else if (nums[k] + nums[l] < target) { k++; }
    else {
      result.push([nums[i], nums[j], nums[k], nums[l]]);
      while (k < n - 1 && nums[k] == nums[k + 1]) k++;
      while (l > 0 && nums[l] == nums[l - 1]) l--;
      k++;
      l--;
    }
  }
}

function fourSum(A, B) {


  A.sort((a, b) => a - b);

  let n = A.length;
  let result = [];
  if (n < 4) {
    return result;
  }
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && A[i] == A[i - 1]) { continue; }
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && A[j] == A[j - 1]) { continue; }
      let subTarget = target - (A[i] + A[j]);
      twoSum(result, A, i, j, n, subTarget);
    }
  }
  return result;

}

let S = [1, 0, -1, 0, -2, 2], target = 0;
console.log(fourSum(S, target));