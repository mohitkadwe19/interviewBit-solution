#include <bits/stdc++.h>
using namespace std;

int isPalindrome(int A)
{
  if (A < 0)
    return 0;
  int num = A;
  int rev = 0;
  while (num > 0)
  {
    rev = rev * 10 + num % 10;
    num /= 10;
  }
  return (rev == A);
}

int main()
{
  int A = 12121;
  cout << isPalindrome(A) << endl;
  return 0;
}