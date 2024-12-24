// First:

const reverseListFirst = head => {
  let nextNode;
  
  const move = (prevNode, currentNode) => {
    if(currentNode === null) return prevNode;
    
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    return move(currentNode, nextNode);
  };
  
  return move(null, head);
};

// Second:

const reverseListSecond = head => {
  let newHead = head;

  const move = (prevNode, currentNode) => {
    if(currentNode === null) return newHead;

    let nextNode = currentNode.next;
    move(currentNode, nextNode);
    currentNode.next = prevNode;
    if(nextNode === null) newHead = currentNode;
    return newHead;
  };
  
  return move(null, head);
};

// Third:

const reverseListThird = currentNode => {
  // Catch the last node and return it since it's the new head.
  if (!currentNode || !currentNode.next) return currentNode; 

  // Get the next node after the current, we are sure it's exist.
  let nextNode = currentNode.next;
  
  // Get the new head from the first if statement.
  let newHead = reverseList(nextNode);

  // Make the next node points to the current node, apply reversing.
  // Example: 1 is current node and 2 is the next node: 1 -> 2 -> null => 1 <- 2
  nextNode.next = currentNode;

  // Make the current node points to null.
  currentNode.next = null;
  
  // Finish reversing in this node move on returning the new head.
  return newHead;
}