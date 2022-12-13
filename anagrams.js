function anagrams(A) {

  let anagrams = new Map();
  for (let i = 0; i < A.length; i++) {
    let word = A[i];
    let sortedWord = word.split("").sort().join("");
    if (anagrams.has(sortedWord)) {
      anagrams.get(sortedWord).push(i + 1);
    } else {
      anagrams.set(sortedWord, [i + 1]);
    }
  }
  let result = [];
  for (let [key, value] of anagrams) {
    result.push(value);
  }
  return result;
}

let A = ["cat", "dog", "god", "tca"];
console.log(anagrams(A));