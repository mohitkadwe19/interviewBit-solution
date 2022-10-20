#include <bits/stdc++.h>
using namespace std;

struct TreeNode
{
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

int hasPathSum(TreeNode *A, int B)
{
  if (A == NULL)
    return 0;
  if (A->left == NULL && A->right == NULL)
    return (B == A->val);
  return hasPathSum(A->left, B - A->val) || hasPathSum(A->right, B - A->val);
}

int main()
{
  TreeNode *root = new TreeNode(1);
  root->left = new TreeNode(2);
  root->right = new TreeNode(3);
  root->left->left = new TreeNode(4);
  root->left->right = new TreeNode(5);
  root->right->left = new TreeNode(6);
  root->right->right = new TreeNode(7);
  cout << hasPathSum(root, 10) << endl;
  return 0;
}