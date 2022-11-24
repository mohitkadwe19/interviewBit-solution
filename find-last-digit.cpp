#include <bits/stdc++.h>
using namespace std;

int solve(string A, string B)
{
  int n = A.size();
  int m = B.size();

  // find the last digit of string A

  // if it is 0 or 1 or 5 or 6 always comes one of whatever it is

  int ld = A[n - 1] - '0'; // -'0' for changing char to integer

  if (ld == 0 or ld == 1 or ld == 5 or ld == 6)
  {

    return ld;
  }

  // now if it is four  then we will see last digit if is divible by
  // 2 then we got 6 because lets A=14 B=2

  // 14*14=144*14=6 you can take another exemple

  // otherwise it will throw 4

  if (ld == 4)
  {

    // finding the last digit of B

    int ldd = B[m - 1] - '0';

    if (ldd % 2 == 0)
    {
      return 6;
    }
    else
    {
      return 4;
    }
  }

  // now if it 9

  if (ld == 9)
  {

    // we will see the last digit of B if it is divisble by 2
    // then last digit will comes out to be  1

    // lets A=99  B=4

    // 99*99=9801*99=970299*99=96059601  last digit it 1

    int ldd = B[m - 1] - '0';

    if (ldd % 2 == 0)
    {
      return 1;
    }
    else
    {
      return 9;
    }
  }

  // last case when all above not come then

  // we will take last two digit*10 and then devide to it with 4

  // here will be find where we want to reach that place we are
  // going to find out if you observed if we multiplied any noumber
  // after certain operation same last digit repeated

  int num = 10 * (B[m - 2] - '0') + B[m - 1] - '0';

  int r = num % 4;
  if (r == 0)
  {
    r = 4;
  }

  // now if last digit of A is 2 then last digit comes {0,2,4,8,6};

  // if ld of A 3 {0,3,9,7,1};

  // if ld of A 7 {0,7,9,3,1};
  // if ld of A 8 {0,8,4,2,1};

  // for stroing i am going make map
  unordered_map<int, vector<int>> mp;

  mp[2] = {0, 2, 4, 8, 6};
  mp[3] = {0, 3, 9, 7, 1};
  mp[7] = {0, 7, 9, 3, 1};
  mp[8] = {0, 8, 4, 2, 6};

  return mp[ld][r];
}

int main()
{
  string A, B;
  cin >> A >> B;
  cout << solve(A, B) << endl;
}