#include <bits/stdc++.h>
using namespace std;

// Definition for singly-linked list.
struct ListNode
{
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

ListNode *solve(ListNode *A)
{
  ListNode *head = A;
  ListNode *zero = NULL;
  ListNode *one = NULL;
  ListNode *zeroHead = NULL;
  ListNode *oneHead = NULL;
  while (head != NULL)
  {
    if (head->val == 0)
    {
      if (zero == NULL)
      {
        zero = head;
        zeroHead = zero;
      }
      else
      {
        zero->next = head;
        zero = zero->next;
      }
    }
    else
    {
      if (one == NULL)
      {
        one = head;
        oneHead = one;
      }
      else
      {
        one->next = head;
        one = one->next;
      }
    }
    head = head->next;
  }
  if (zero != NULL)
  {
    zero->next = oneHead;
  }
  if (one != NULL)
  {
    one->next = NULL;
  }
  if (zeroHead != NULL)
  {
    return zeroHead;
  }
  else
  {
    return oneHead;
  }
}

int main()
{
  struct ListNode *head = new ListNode(1);
  head->next = new ListNode(0);
  head->next->next = new ListNode(1);
  head->next->next->next = new ListNode(0);
  head->next->next->next->next = new ListNode(1);
  head->next->next->next->next->next = new ListNode(0);
  head->next->next->next->next->next->next = new ListNode(1);
  head->next->next->next->next->next->next->next = new ListNode(0);

  struct ListNode *result = solve(head);
  while (result != NULL)
  {
    cout << result->val << " ";
    result = result->next;
  }
  return 0;
}