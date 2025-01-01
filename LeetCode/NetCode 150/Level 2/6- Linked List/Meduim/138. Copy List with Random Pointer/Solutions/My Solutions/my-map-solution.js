var copyRandomList = function(head) {
  const nodesMapping = new Map();
  nodesMapping.set(null, null);

  let currentNode = head, newHead = newLLTail = new _Node(0, null, null);

  // Create the deep copy.
  // Map between each origin node and its correspondent in the new created one.  
  while(currentNode){
    const newNode = new _Node(currentNode.val, null, currentNode.random)
    newLLTail.next = newNode;

    nodesMapping.set(currentNode, newNode)
 
    newLLTail = newNode;
    currentNode = currentNode.next;
  }

  currentNode = newHead;
  while(currentNode){
    // Map each new node to the correct random node.
    currentNode.random = nodesMapping.get(currentNode.random);

    currentNode = currentNode.next;
  }

  return newHead.next;
};
