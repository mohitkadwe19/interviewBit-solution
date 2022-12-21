
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  rotateRight(A, B) {

    if (A === null || A.next === null) {
      return A;
    }

    let len = 1;
    let tail = A;
    while (tail.next !== null) {
      tail = tail.next;
      len++;
    }

    let k = B % len;
    if (k === 0) {
      return A;
    }

    let newTail = A;
    for (let i = 0; i < len - k - 1; i++) {
      newTail = newTail.next;
    }

    let newHead = newTail.next;
    newTail.next = null;
    tail.next = A;

    return newHead;
  }
}

let node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);

console.log(node.rotateRight(node, 2));
