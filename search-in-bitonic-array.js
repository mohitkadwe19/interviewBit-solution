function binarySearch(A, B) {

  let start = 0, end = A.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (A[mid] === B) {
      return mid;
    } else if (A[mid] < B) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

function solve(A, B) {

  let max = Math.max(...A);
  let maxIndex = A.indexOf(max);

  let left = A.slice(0, maxIndex + 1);
  let right = A.slice(maxIndex, A.length).reverse();

  let leftIndex = binarySearch(left, B);
  let rightIndex = binarySearch(right, B);

  if (leftIndex !== -1) {
    return leftIndex;
  } else if (rightIndex !== -1) {
    return A.length - rightIndex - 1;
  } else {
    return -1;
  }

}

let A = [3, 9, 10, 20, 17, 5, 1], B = 20;
console.log(solve(A, B));