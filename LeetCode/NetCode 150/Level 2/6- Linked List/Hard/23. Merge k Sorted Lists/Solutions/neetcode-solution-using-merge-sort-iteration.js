const mergeKLists = lists => {
  if (!lists.length) return null;

  while (lists.length > 1) {
    const mergedLists = [];

    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i], l2 = (i + 1) < lists.length ? lists[i + 1] : null;
      mergedLists.push(this.mergeList(l1, l2));
    };

    lists = mergedLists;
  }
  return lists[0];
}

/**
 * @param {ListNode} l1
 * @param  {ListNode} l2
 * @return {ListNode}
 */
const mergeList = (l1, l2) => {
  const dummy = curr = new ListNode(0);

  while (l1 && l2) {
      if (l1.val <= l2.val) {
          curr.next = l1;
          l1 = l1.next;
      } else {
          curr.next = l2;
          l2 = l2.next;
      }
      curr = curr.next;
  }

  curr.next = l1 ? l1 : l2;

  return dummy.next;
}