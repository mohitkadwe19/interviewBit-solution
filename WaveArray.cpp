#include <bits/stdc++.h>
using namespace std;

vector<int> wave(vector<int> &A)
{
  sort(A.begin(), A.end());
  for (int i = 0; i < A.size() - 1; i += 2)
  {
    swap(A[i], A[i + 1]);
  }
  return A;
}

int main()
{
  vector<int> A = {1, 2, 3, 4};
  vector<int> ans = wave(A);
  for (int i = 0; i < ans.size(); i++)
    cout << ans[i] << " ";
  cout << endl;
  return 0;
}