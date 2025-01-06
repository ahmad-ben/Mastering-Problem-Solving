/*
  LATER:
    Since the following solutions are the same why the first onw didn't work and the second did.
    What is the different between the Set and normal Obj that make this happen.
*/

var hasCycle = function(head) {
  let visitedNodes = {}, currentNode = head;

  while(currentNode){
    if(visitedNodes[currentNode]) return true; 
    visitedNodes[currentNode] = true;
    currentNode = currentNode.next;
  }

  return false;
};

var hasCycle = function (head) {
  let visitedNodes = new Set(), currentNode = head;

  while (currentNode) {
    if (visitedNodes.has(currentNode)) return true;
    visitedNodes.add(currentNode);
    currentNode = currentNode.next;
  }

  return false;
}

