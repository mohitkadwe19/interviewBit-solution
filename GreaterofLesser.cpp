#include <bits/stdc++.h>
using namespace std;
#define ll long long

int solve(vector<int> &A, vector<int> &B, int C)
{
  // Find the number of integers in A which are greater than C and find the number of integers in B which are less than C.
  sort(A.begin(), A.end());

  sort(B.begin(), B.end());

  int max_cnt, min_cnt;

  auto A_max = upper_bound(A.begin(), A.end(), C);

  max_cnt = A.size() - (A_max - A.begin());

  auto B_max = lower_bound(B.begin(), B.end(), C);

  min_cnt = B_max - B.begin();

  return max(max_cnt, min_cnt);
}

int main()
{
  vector<int> A = {1, 2, 3, 4};
  vector<int> B = {5, 6, 7, 8};
  int C = 5;
  cout << solve(A, B, C) << endl;
  return 0;
}