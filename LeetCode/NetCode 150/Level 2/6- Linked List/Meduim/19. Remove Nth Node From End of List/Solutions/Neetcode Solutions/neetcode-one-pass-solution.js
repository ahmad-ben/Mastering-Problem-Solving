const removeNthFromEnd = (head, n) => {
  const dummy = new ListNode(0, head);
  let left = dummy, right = head;

  while (n > 0) {
    right = right.next;
    n--;
  }

  while (right !== null) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;
  return dummy.next;
}