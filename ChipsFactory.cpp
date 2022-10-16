#include <bits/stdc++.h>
using namespace std;

vector<int> solve(vector<int> &A)
{
  int n = A.size();
  int i = 0, j = 0;
  while (j < n)
  {
    if (A[j] != 0)
    {
      swap(A[i++], A[j]);
    }
    j++;
  }
  return A;
}

int main()
{
  vector<int> A = {0, 1, 2, 3};
  vector<int> ans = solve(A);
  for (int i = 0; i < ans.size(); i++)
  {
    cout << ans[i] << " ";
  }
  return 0;
}