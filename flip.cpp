#include <bits/stdc++.h>
using namespace std;

vector<int> flip(string A)
{
  int n = A.size();
  int sum = 0, maxSum = 0, start = 0, end = 0, s = 0;
  for (int i = 0; i < n; i++)
  {
    sum += (A[i] == '0') ? 1 : -1;
    if (sum < 0)
    {
      sum = 0;
      s = i + 1;
    }
    if (sum > maxSum)
    {
      maxSum = sum;
      start = s;
      end = i;
    }
  }
  if (maxSum == 0)
    return {};
  return {start + 1, end + 1};
}

int main()
{
  string A = "010";
  vector<int> ans = flip(A);
  for (int i = 0; i < ans.size(); i++)
  {
    cout << ans[i] << " ";
  }
  return 0;
}