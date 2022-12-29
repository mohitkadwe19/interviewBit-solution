class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function generateTrees(A) {

  if (A === 0) {
    return [];
  }

  return generateTreesHelper(1, A);

}

function generateTreesHelper(start, end) {

  let result = [];

  if (start > end) {
    result.push(null);
    return result;
  }

  for (let i = start; i <= end; i++) {
    let leftSubtrees = generateTreesHelper(start, i - 1);
    let rightSubtrees = generateTreesHelper(i + 1, end);

    for (let j = 0; j < leftSubtrees.length; j++) {
      let leftSubtree = leftSubtrees[j];
      for (let k = 0; k < rightSubtrees.length; k++) {
        let rightSubtree = rightSubtrees[k];
        let node = new TreeNode(i);
        node.left = leftSubtree;
        node.right = rightSubtree;
        result.push(node);
      }
    }
  }

  return result;
}

console.log(generateTrees(3));