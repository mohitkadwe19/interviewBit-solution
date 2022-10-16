#include <bits/stdc++.h>
using namespace std;

int solve(int A)
{
  int big_count = (int)log10(A) + 1;
  long sum = 0;
  int A1 = A;
  while (A1 > 0)
  {
    long d = A1 % 10;
    sum += pow(d, big_count);
    A1 = A1 / 10;
  }
  if (sum == A)
  {
    return 1;
  }
  return 0;
}

int main()
{
  int A = 371;
  cout << solve(A) << endl;
  return 0;
}