#include <bits/stdc++.h>
using namespace std;

int solve(vector<vector<int>> &A)
{
  int n = A.size();
  vector<vector<int>> dp(n, vector<int>(n, 0));
  dp[0][0] = A[0][0];
  for (int i = 1; i < n; i++)
  {
    for (int j = 0; j <= i; j++)
    {
      if (j == 0)
      {
        dp[i][j] = dp[i - 1][j] + A[i][j];
      }
      else if (j == i)
      {
        dp[i][j] = dp[i - 1][j - 1] + A[i][j];
      }
      else
      {
        dp[i][j] = max(dp[i - 1][j - 1], dp[i - 1][j]) + A[i][j];
      }
    }
  }
  int ans = INT_MIN;
  for (int i = 0; i < n; i++)
  {
    ans = max(ans, dp[n - 1][i]);
  }
  return ans;
}

int main()
{
  vector<vector<int>> A = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
  cout << solve(A) << endl;
  return 0;
}