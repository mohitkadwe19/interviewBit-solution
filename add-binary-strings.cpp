#include <bits/stdc++.h>
using namespace std;

string addBinary(string A, string B)
{
  int i = A.size() - 1;
  int j = B.size() - 1;
  int carry = 0;
  string ans = "";
  while (i >= 0 || j >= 0 || carry)
  {
    int sum = carry;
    if (i >= 0)
      sum += A[i--] - '0';
    if (j >= 0)
      sum += B[j--] - '0';
    ans += to_string(sum % 2);
    carry = sum / 2;
  }
  reverse(ans.begin(), ans.end());
  return ans;
}

int main()
{
  string A = "100";
  string B = "11";
  cout << addBinary(A, B) << endl;
  return 0;
}