#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> generateMatrix(int A)
{

  int t = 0, l = 0, r = A - 1, b = A - 1;

  int counter = 1;

  vector<vector<int>> v(A, vector<int>(A, 0));

  while (counter <= A * A)

  {

    for (int i = l; i <= r; i++)
    {
      v[t][i] = counter++;
    }

    for (int i = t + 1; i <= b; i++)
    {
      v[i][r] = counter++;
    }

    for (int i = r - 1; i >= l; i--)
    {
      v[b][i] = counter++;
    }

    for (int i = b - 1; i > t; i--)
    {
      v[i][l] = counter++;
    }

    t++;

    l++;

    r--;

    b--;
  }

  return v;
}

int main()
{
  int A = 1;
  vector<vector<int>> v = generateMatrix(A);
  for (int i = 0; i < v.size(); i++)
  {
    for (int j = 0; j < v[i].size(); j++)
    {
      cout << v[i][j] << " ";
    }
    cout << endl;
  }
  return 0;
}