#include <bits/stdc++.h>
using namespace std;

int atoi(const string A)
{
  long long ans = 0, flag = 1, space = 0;
  for (int i = 0; i < A.size(); i++)
  {
    if (i == 0 && A[i] == '-')
      flag = -1;
    else if (i == 0 && A[i] == '+')
      flag = 1;
    else if (ans == 0 && A[i] == ' ' && i == space)
    {
      space++;
      continue;
    }
    else if (A[i] == ' ')
      break;
    else if (isdigit(A[i]) == false)
      break;
    else if (isdigit(A[i]) == true)
      ans = (ans * 10) + (A[i] - 48);
    if (ans > INT_MAX)
    {
      if (flag == 1)
        return INT_MAX;
      else
        return INT_MIN;
    }
  }
  return ans * flag;
}

int main()
{
  string A = "9 2704 ";
  cout << atoi(A) << endl;
  return 0;
}