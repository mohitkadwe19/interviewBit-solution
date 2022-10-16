#include <bits/stdc++.h>
using namespace std;

int pow(int x, int n, int d)
{
  if (x == 0)
    return 0;
  if (n == 0)
    return 1;
  long long ans = 1;
  long long base = x;
  while (n > 0)
  {
    if (n % 2 == 1)
    {
      ans = (ans * base) % d;
      n--;
    }
    else
    {
      base = (base * base) % d;
      n /= 2;
    }
  }
  if (ans < 0)
    ans = (ans + d) % d;
  return ans;
}
int main()
{
  int x = 2;
  int n = 3;
  int d = 3;
  cout << pow(x, n, d) << endl;
  return 0;
}