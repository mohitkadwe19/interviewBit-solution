#include <bits/stdc++.h>
using namespace std;

int solve(vector<int> &A, int B)
{
  int n = A.size();
  int count = 0;
  for (int i = 0; i < n; i++)
  {
    if (A[i] <= B)
    {
      count++;
    }
  }
  return count;
}

int main()
{
  vector<int> A = {1, 2, 3, 4, 5};
  int B = 3;
  cout << solve(A, B) << endl;
  return 0;
}