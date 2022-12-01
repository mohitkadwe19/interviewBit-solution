#include <bits/stdc++.h>
using namespace std;

int solve(vector<int> &A, int B)
{

  priority_queue<int>
      pq(A.begin(), A.end());

  int profit = 0;

  for (int i = 0; i < B; i++)

  {

    int ele = pq.top();

    profit += ele;

    pq.pop();

    pq.push(ele - 1);
  }

  return profit;
};

int main()
{

  vector<int> A = {20, 30, 10};

  int B = 2;

  cout << solve(A, B);

  return 0;
}