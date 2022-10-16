#include <bits/stdc++.h>
using namespace std;

string longestCommonPrefix(vector<string> &A)
{
  string ans = "";
  int n = A.size();
  if (n == 0)
    return ans;
  if (n == 1)
    return A[0];
  int minlen = INT_MAX;
  for (int i = 0; i < n; i++)
  {
    minlen = min(minlen, (int)A[i].length());
  }
  for (int i = 0; i < minlen; i++)
  {
    char curr = A[0][i];
    for (int j = 1; j < n; j++)
    {
      if (A[j][i] != curr)
        return ans;
    }
    ans += curr;
  }
  return ans;
}

int main()
{
  vector<string> A = {"abcdefgh", "aefghijk", "abcefgh"};
  cout << longestCommonPrefix(A) << endl;
  return 0;
}