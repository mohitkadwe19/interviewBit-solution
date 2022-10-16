#include <bits/stdc++.h>
using namespace std;

int findPairs(string A, int B)
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
  {
    return 0;
  }
  return maxSum + 1;
}

int main()
{
  string A = "010";
  int B = 3;
  cout << findPairs(A, B);
  return 0;
}