#include <bits/stdc++.h>
using namespace std;

long solve(string A)
{
  long ans = 0;
  string s = "";
  long res = 0;
  for (auto x : A)
  {
    if (isdigit(x))
      s += x;
    else
    {
      for (int i = 0; i < s.size(); i++)
      {
        ans = ans * 10 + (s[i] - '0');
      }
      res += ans;
      ans = 0;
      s = "";
    }
  }
  if (s.size() > 0)
  {
    for (int i = 0; i < s.size(); i++)
    {
      ans = ans * 10 + (s[i] - '0');
    }
    res += ans;
  }
  return res;
}

int main()
{
  string A = "a12b34c";
  cout << solve(A) << endl;
  return 0;
}