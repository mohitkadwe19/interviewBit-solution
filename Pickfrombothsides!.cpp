#include <bits/stdc++.h>
using namespace std;

int solve(vector<int> &A, int B)
{
  int n = A.size();
  int sum = 0;
  for (int i = 0; i < B; i++)
  {
    sum += A[i];
  }
  int ans = sum;
  for (int i = 0; i < B; i++)
  {
    sum -= A[B - i - 1];
    sum += A[n - i - 1];
    ans = max(ans, sum);
  }
  return ans;
}

int main()
{
  vector<int> A = {5, -2, 3, 1, 2};
  int B = 3;
  cout << solve(A, B) << endl;
  return 0;
}