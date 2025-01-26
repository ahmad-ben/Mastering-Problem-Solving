const reverseList = head => {
  let prev = null, curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  };

  return prev;
}