#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> solve(vector<vector<int>> &A)
{
  int n = A.size();
  for (int i = 0; i < n; i++)
  {
    for (int j = i + 1; j < n; j++)
      swap(A[i][j], A[j][i]);
  }
  return A;
}

int main()
{
  vector<vector<int>> A = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
  vector<vector<int>> ans = solve(A);
  for (int i = 0; i < ans.size(); i++)
  {
    for (int j = 0; j < ans[i].size(); j++)
      cout << ans[i][j] << " ";
    cout << endl;
  }
  return 0;
}
