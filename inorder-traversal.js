
// Definition for a  binary tree node
function TreeNode(data) {
  this.data = data
  this.left = null
  this.right = null
}

function inorderTraversal(A) {

  let stack = []
  let result = []
  let current = A

  while (current !== null || stack.length > 0) {

    while (current !== null) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()
    result.push(current.data)
    current = current.right

  }

  return result

}

// 1 2 3

let root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

console.log(inorderTraversal(root))

