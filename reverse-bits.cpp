#include <bits/stdc++.h>
using namespace std;

unsigned int reverse(unsigned int A)
{
  unsigned int B = 0;
  for (int i = 0; i < 32; i++)
  {
    B = B << 1;
    B = B | (A & 1);
    A = A >> 1;
  }
  return B;
}

int main()
{
  unsigned int A = 3;
  cout << reverse(A) << endl;
  return 0;
}