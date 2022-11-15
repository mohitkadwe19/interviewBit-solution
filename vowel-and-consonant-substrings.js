function solve(A) {

  let size = A.length, vowel = 0, consonants = 0;

  if (size == 1) {
    return 0;
  }
  for (let i = 0; i < size; i++) {

    if (A[i] == 'a' || A[i] == 'e' || A[i] == 'i' || A[i] == 'o' || A[i] == 'u') {
      vowel++;
    }
    else {
      consonants++;
    }
  }

  let ans = vowel * consonants % 1000000007;
  return ans;
}

let A = "inttnikjmjbemrberk";
console.log(solve(A));