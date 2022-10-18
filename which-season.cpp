#include <bits/stdc++.h>
using namespace std;

string solve(int A)
{
  if (A == 1 || A == 2 || A == 12)
    return "Winter";
  else if (A == 3 || A == 4 || A == 5)
    return "Spring";
  else if (A == 6 || A == 7 || A == 8)
    return "Summer";
  else if (A == 9 || A == 10 || A == 11)
    return "Autumn";
  else
    return "Invalid";
}

int main()
{
  int A = 6;
  cout << solve(A) << endl;
  return 0;
}