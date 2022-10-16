#include <bits/stdc++.h>
using namespace std;
#define ll long long

int solve(vector<int> &A)
{
  // find greater number than all in the vector
  int count = 0;
  int max = 0;
  for (int i = 0; i < A.size(); i++)
  {
    if (A[i] > max)
    {
      max = A[i];
      count++;
    }
  }
  return count;
}

int main()
{
  vector<int> A = {1, 2, 3, 4};
  cout << solve(A);
  return 0;
}