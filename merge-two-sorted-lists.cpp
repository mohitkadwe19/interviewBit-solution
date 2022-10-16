#include <bits/stdc++.h>
using namespace std;

struct ListNode
{
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

ListNode mergeTwoLists(ListNode *A, ListNode *B)
{
  if (!A)
    return B;
  if (!B)
    return A;

  if (A->val < B->val)
    A->next = mergeTwoLists(A->next, B);
  else
  {
    B->next = mergeTwoLists(A, B->next);
    A = B;
  }
  return A;
}

int main()
{
  ListNode *A = new ListNode(1);
  A->next = new ListNode(2);
  A->next->next = new ListNode(3);
  A->next->next->next = new ListNode(4);
  A->next->next->next->next = new ListNode(5);
  ListNode *B = new ListNode(1);
  B->next = new ListNode(2);
  B->next->next = new ListNode(3);
  B->next->next->next = new ListNode(4);
  B->next->next->next->next = new ListNode(5);
  ListNode *C = mergeTwoLists(A, B);
  while (C != NULL)
  {
    cout << C->val << " ";
    C = C->next;
  }
  return 0;
}