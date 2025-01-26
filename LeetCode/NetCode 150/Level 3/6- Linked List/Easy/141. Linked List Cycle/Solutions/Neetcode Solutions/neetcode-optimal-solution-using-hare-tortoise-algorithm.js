var hasCycle = function (head) {
  let visitedNodes = new Set(), currentNode = head;

  while (currentNode) {
    if (visitedNodes.has(currentNode)) return true;
    visitedNodes.add(currentNode);
    currentNode = currentNode.next;
  }

  return false;
}