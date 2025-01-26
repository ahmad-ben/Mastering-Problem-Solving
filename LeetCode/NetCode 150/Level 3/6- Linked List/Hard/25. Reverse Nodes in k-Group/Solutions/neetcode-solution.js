const getKth = (curr, k) => {
  while (curr && k > 0) {
    curr = curr.next;
    k--;
  }

  return curr;
}

const reverseKGroup = (head, k) => {
  const dummy = new ListNode(0, head);

  // Last node in the prev group.
  let lastNodeInPrevGr = dummy;

  while (true) {
    // The last node in the current group.
    const lastNodeInCurrentGr = getKth(lastNodeInPrevGr, k);

    // This group isn't complete.
    if (!lastNodeInCurrentGr) break;

    // Save the head of the next group.
    const groupNext = lastNodeInCurrentGr.next;

    let prev = lastNodeInCurrentGr.next;
    let curr = lastNodeInPrevGr.next;

    while (curr != groupNext) {
      const tmp = curr.next;

      curr.next = prev;

      prev = curr;
      curr = tmp;
    }

    // This node was the previous node in our group.
    // But trough reverse it will be the last of this group now.
    // So for the next group it's the last node of the previous group 😵‍💫🤣.
    const prevFirstInCurrentNode = lastNodeInPrevGr.next;

    lastNodeInPrevGr.next = lastNodeInCurrentGr;
    lastNodeInPrevGr = prevFirstInCurrentNode;
  }

  return dummy.next;
}