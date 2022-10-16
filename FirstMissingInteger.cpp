#include <bits/stdc++.h>
using namespace std;

int firstMissingPositive(vector<int> &A)
{
  int n = A.size();
  for (int i = 0; i < n; i++)
  {
    if (A[i] <= 0)
      A[i] = n + 1;
  }
  for (int i = 0; i < n; i++)
  {
    if (abs(A[i]) <= n)
    {
      if (A[abs(A[i]) - 1] > 0)
        A[abs(A[i]) - 1] = -A[abs(A[i]) - 1];
    }
  }
  for (int i = 0; i < n; i++)
  {
    if (A[i] > 0)
      return i + 1;
  }
  return n + 1;
}

int main()
{
  vector<int> A = {1, 2, 0};
  cout << firstMissingPositive(A) << endl;
  return 0;
}