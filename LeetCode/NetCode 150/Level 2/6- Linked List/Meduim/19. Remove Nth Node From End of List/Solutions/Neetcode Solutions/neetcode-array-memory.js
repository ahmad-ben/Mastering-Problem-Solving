const removeNthFromEnd = (head, n) => {
  let nodes = [], cur = head;

  while (cur) {
    nodes.push(cur);
    cur = cur.next;
  }

  const removeIndex = nodes.length - n;
  if (removeIndex === 0) return head.next;

  nodes[removeIndex - 1].next = nodes[removeIndex].next;
  return head;
}