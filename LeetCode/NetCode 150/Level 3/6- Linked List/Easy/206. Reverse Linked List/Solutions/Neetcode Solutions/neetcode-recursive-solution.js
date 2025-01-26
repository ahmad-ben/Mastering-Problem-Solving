const reverseList = head => {
  if (!head) return null; 

  let newHead = head;

  /*
    This condition will for all node except the last one.
      Since the last node next it's null.
    We will update the newHead in this case because:
      The newHead should be the last node and since we enter this condition that means:
        We are not in the last node as we said before.
    Also for this nodes we should make the next node of them point to them.
      Applying the reverse approach that we want. 
  */
  if (head.next) {
    newHead = reverseList(head.next);
    // Current Node 1 -Not the last-: 1 -> 2 -> null => 1 <- 2
    head.next.next = head;
  }

  head.next = null;

  return newHead;
}