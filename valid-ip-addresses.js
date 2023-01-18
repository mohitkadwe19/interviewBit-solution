function restoreIpAddresses(A) {

  let result = [];
  let temp = [];

  function isValid(s) {
    if (s.length > 3) {
      return false;
    }
    if (s.length > 1 && s[0] === '0') {
      return false;
    }
    let num = parseInt(s);
    return num >= 0 && num <= 255;
  }

  function helper(A, index) {
    if (temp.length === 4 && index === A.length) {
      result.push(temp.join('.'));
      return;
    }
    if (temp.length === 4 && index < A.length) {
      return;
    }
    for (let i = 1; i <= 3; i++) {
      let s = A.substring(index, index + i);
      if (isValid(s)) {
        temp.push(s);
        helper(A, index + i);
        temp.pop();
      }
    }
  }

  helper(A, 0);
  return result;

}

let A = "25525511135";
console.log(restoreIpAddresses(A));