#include <bits/stdc++.h>
using namespace std;

int solve(string A)
{
  stack<char> s;
  int i, count = 0;

  for (i = 0; i < A.size(); i++)
  {
    if (A[i] == '(')
    {
      s.push(A[i]);
    }
    else
    {
      if (s.empty())
      {
        count++;
      }
      else
      {
        s.pop();
      }
    }
  }

  return count + s.size();
}

int main()
{
  string A = "())";
  cout << solve(A);
  return 0;
}