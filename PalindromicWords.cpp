#include <bits/stdc++.h>
using namespace std;

int solve(string A)
{
  stack<string> AStack;
  string temp = "";
  for (int i = 0; i < A.length(); i++)
  {
    if (A[i] == ' ')
    {
      AStack.push(temp);
      temp = "";
    }
    else
    {
      temp += A[i];
    }
  }
  AStack.push(temp);
  int count = 0;
  while (!AStack.empty())
  {
    string str = AStack.top();
    reverse(str.begin(), str.end());
    if (str == AStack.top())
    {
      count++;
    }
    AStack.pop();
  }
  return count;
}
int main()
{
  string A = "the fastest racecar";
  cout << solve(A) << endl;
  return 0;
  return 0;
}