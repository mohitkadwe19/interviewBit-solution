#include <bits/stdc++.h>
using namespace std;

bool checkIsPalindrome(string s, int i, int j)
{

  while (i <= j)
  {

    if (s[i] != s[j])
      return false;

    i++;
    j--;
  }

  return true;
}

int solve(string A)
{
  int i = 0, j = A.length() - 1;

  if (checkIsPalindrome(A, i, j))
    return 1;

  while (i <= j)

  {

    if (A[i] == A[j])

      i++, j--;

    else

    {

      if (checkIsPalindrome(A, i + 1, j) || checkIsPalindrome(A, i, j - 1))
        return 1;

      else
        return 0;
    }
  }

  return 0;
}

int main()
{
  string str = "abcba";
  cout << solve(str) << endl;
  return 0;
}