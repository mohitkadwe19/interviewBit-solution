
function solve(A) {

  let leader = A[A.length - 1];

  let leaders = [leader];

  for (let i = A.length - 2; i >= 0; i--) {

    if (A[i] > leader) {

      leader = A[i];

      leaders.push(leader);

    }

  }

  return leaders.reverse();

}

let A = [16, 17, 4, 3, 5, 2];
console.log(solve(A));