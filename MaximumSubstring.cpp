#include <bits/stdc++.h>
using namespace std;

int solve(string A, int B)
{
  int ptr = 0;

  int res = 0;

  while (ptr <= A.size())
  {

    int count = 0;

    for (int i = ptr; i < ptr + B; i++)
    {

      if (i > A.size())
      {
        res = max(res, count);
        return res;
      };
      if (A[i] == 'a')
      {
        count++;
      }
    }
    res = max(res, count);
    ptr = ptr + B;
  }
  return res;
}

int main()
{
  string A = "baab";
  int B = 2;
  cout << solve(A, B) << endl;
  return 0;
}