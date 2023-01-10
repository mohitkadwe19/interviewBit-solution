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


//param A : root node of tree
//return an integer
function solve(A) {

  let queue = [A];
  let max = Number.MIN_SAFE_INTEGER;

  while (queue.length > 0) {
    let size = queue.length;
    let sum = 0;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      sum += node.data;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    max = Math.max(max, sum);
  }

  return max;

}

let root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(5)
root.left.left = new TreeNode(7)

console.log(solve(root));