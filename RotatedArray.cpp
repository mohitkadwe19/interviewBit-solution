#include <bits/stdc++.h>
using namespace std;

int findMin(const vector<int> &A)
{
  int n = A.size();
  int low = 0;
  int high = n - 1;
  int index = 0;
  while (low <= high)
  {
    int mid = (low + high) / 2;
    if (A[mid] < A[index])
    {
      index = mid;
      high = mid - 1;
    }
    else
    {
      low = mid + 1;
    }
  }
  return A[index];
}

int main()
{
  vector<int> A = {4, 5, 6, 7, 0, 1, 2, 3};
  cout << findMin(A) << endl;
  return 0;
}