const copyRandomList = head => {
  const originToNew = new Map();
  originToNew.set(null, null);

  let currentNode = head;
  while (currentNode) {
    const newNode = new Node(currentNode.val);
    originToNew.set(currentNode, newNode);

    currentNode = currentNode.next;
  }

  currentNode = head;
  while (currentNode) {
    const newNode = originToNew.get(currentNode);
    newNode.next = originToNew.get(currentNode.next);
    newNode.random = originToNew.get(currentNode.random);

    currentNode = currentNode.next;
  }

  return originToNew.get(head);
}