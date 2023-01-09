// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


function solve(A, B) {

  if (A === null) {
    return B;
  }

  if (B === null) {
    return A;
  }

  A.data += B.data;
  A.left = solve(A.left, B.left);
  A.right = solve(A.right, B.right);

  return A;

}

let A = new TreeNode(1);
A.left = new TreeNode(2);

let B = new TreeNode(3);
B.left = new TreeNode(4);

console.log(solve(A, B));


