#include <bits/stdc++.h>
using namespace std;

int solve(vector<int> &A, int B, int C)
{
  int ans = 0;
  if (B % 2 != 0)
  {
    for (int i = 0; i < A.size(); i++)
    {
      if (A[i] % 2 != 0)
        continue;
      else
        ans = ans + C;
    }
  }
  else
  {
    for (int i = 0; i < A.size(); i++)
    {
      if (A[i] % 2 == 0)
        continue;
      else
        ans = ans + C;
    }
  }
  return ans;
}

int main()
{
  vector<int> A = {1, 2, 3};
  int B = 31, C = 100;
  cout << solve(A, B, C) << endl;
  return 0;
}