#include <bits/stdc++.h>
using namespace std;

int evalRPN(vector<string> &A)
{
  stack<int> s;
  int n = A.size();
  for (int i = 0; i < n; i++)
  {
    if (A[i] == "+" || A[i] == "-" || A[i] == "*" || A[i] == "/")
    {
      int a = s.top();
      s.pop();
      int b = s.top();
      s.pop();
      if (A[i] == "+")
        s.push(b + a);
      else if (A[i] == "-")
        s.push(b - a);
      else if (A[i] == "*")
        s.push(b * a);
      else if (A[i] == "/")
        s.push(b / a);
    }
    else
    {
      s.push(stoi(A[i]));
    }
  }
  return s.top();
}
int main()
{
  vector<string> A = {"2", "1", "+", "3", "*"};
  cout << evalRPN(A) << endl;
  return 0;
}