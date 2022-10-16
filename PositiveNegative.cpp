#include <bits/stdc++.h>
using namespace std;

vector<int> solve(vector<int> &A)
{
  vector<int> res(2);

  for (int i : A)
  {
    res[(i < 0)] += (i != 0);
  }

  return res;
}

int main()
{
  vector<int> A = {1, 2, 3, -4, -1, 4};
  vector<int> ans = solve(A);
  for (int i = 0; i < ans.size(); i++)
  {
    cout << ans[i] << " ";
  }
  return 0;
}