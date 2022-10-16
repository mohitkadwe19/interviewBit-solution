#include <bits/stdc++.h>
using namespace std;

vector<int> solve(string A)
{
  unordered_map<char, int> m;
  vector<int> ans;
  int i;

  for (i = 0; i < A.size(); i++)
  {
    m[A[i]]++;
  }

  for (i = 0; i <= A.size() - 1; i++)
  {
    if (m[A[i]] == 0)
    {
      continue;
    }
    else
    {
      ans.push_back(m[A[i]]);
      m.erase(A[i]);
    }
  }

  return ans;
}

int main()
{
  string A = "interviewbit";
  vector<int> ans = solve(A);
  for (int i = 0; i < ans.size(); i++)
  {
    cout << ans[i] << " ";
  }
  return 0;
}