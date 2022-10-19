#include <bits/stdc++.h>
using namespace std;

int solve(int A)
{
  int l = log2(A) + 1;
  l = pow(2, l) - 1;
  return A ^ (l);
}

int main()
{
  int A = 5;
  cout << solve(A) << endl;
  return 0;
}