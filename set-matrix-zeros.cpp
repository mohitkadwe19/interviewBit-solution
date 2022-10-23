#include <bits/stdc++.h>
using namespace std;

void setZeroes(vector<vector<int>> &A)
{
  int n = A.size();
  int m = A[0].size();
  int row[n] = {0};
  int col[m] = {0};
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < m; j++)
    {
      if (A[i][j] == 0)
      {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < m; j++)
    {
      if (row[i] == 1 || col[j] == 1)
      {
        A[i][j] = 0;
      }
    }
  }
}

int main()
{
  vector<vector<int>> A = {{1, 0, 1}, {1, 1, 1}, {1, 1, 1}};
  setZeroes(A);
  for (int i = 0; i < A.size(); i++)
  {
    for (int j = 0; j < A[0].size(); j++)
    {
      cout << A[i][j] << " ";
    }
    cout << endl;
  }
  return 0;
}