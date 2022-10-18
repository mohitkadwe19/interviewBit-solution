#include <bits/stdc++.h>
using namespace std;

int solve(int A)
{
  if (((A % 4 == 0) || (A % 400 == 0)) && (A % 100 != 0))
  {
    return 1;
  }
  else
  {
    return 0;
  }
}

int main()
{
  int A = 2020;
  cout << solve(A) << endl;
  return 0;
}