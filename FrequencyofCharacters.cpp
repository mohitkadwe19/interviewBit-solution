#include <bits/stdc++.h>
using namespace std;

vector<int> solve(string A)
{
  vector<int> ans;
  int n = A.size();
  int freq[26] = {0};
  for (int i = 0; i < n; i++)
  {
    freq[A[i] - 'a']++;
  }
  for (int i = 0; i < 26; i++)
  {
    ans.push_back(freq[i]);
  }
  return ans;
}

int main()
{
  string A = "abcdefghijklmnopqrstuvwxyz";
  vector<int> ans = solve(A);
  for (int i = 0; i < ans.size(); i++)
  {
    cout << ans[i] << " ";
  }
  return 0;
}