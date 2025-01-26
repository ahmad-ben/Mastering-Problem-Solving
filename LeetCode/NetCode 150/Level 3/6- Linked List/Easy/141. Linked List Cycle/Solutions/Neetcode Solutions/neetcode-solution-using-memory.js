const hasCycle = head => {
  let fast = head, slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next, slow = slow.next;
    if (fast === slow) return true;
  }

  return false;
};