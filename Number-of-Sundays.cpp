#include <bits/stdc++.h>
using namespace std;

int solve(string A, int B)
{
  int num = 0;
  if (A == "Monday")
    num = 7;

  if (A == "Tuesday")
    num = 6;

  if (A == "Wednesday")
    num = 5;

  if (A == "Thursday")
    num = 4;

  if (A == "Friday")
    num = 3;

  if (A == "Saturday")
    num = 2;

  if (A == "Sunday")
    num = 1;

  return B >= num ? (B - num) / 7 + 1 : 0;
}

int main()
{
  string A = "Sunday";
  int B = 4;
  cout << solve(A, B);
  return 0;
}