#include <bits/stdc++.h>
using namespace std;

vector<int> getRow(int A)
{
  vector<int> ans;
  ans.push_back(1);
  for (int i = 1; i <= A; i++)
  {
    ans.push_back(1);
    for (int j = i - 1; j > 0; j--)
    {
      ans[j] = ans[j] + ans[j - 1];
    }
  }
  return ans;
}

int main()
{
  int k = 3;
  vector<int> ans = getRow(k);
  for (int i = 0; i < ans.size(); i++)
    cout << ans[i] << " ";
  return 0;
}