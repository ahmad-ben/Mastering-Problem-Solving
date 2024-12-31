var reorderList = function(head) {
  let currentNode = head, nodesArr = [];

  while(currentNode){
    nodesArr.push(currentNode);
    currentNode = currentNode.next;
  };

  let leftIdx = 0, rightIdx = nodesArr.length - 1;

  while(leftIdx < rightIdx){ 
    nodesArr[rightIdx].next = nodesArr[leftIdx].next;
    nodesArr[leftIdx].next = nodesArr[rightIdx]; 
    leftIdx++;
    rightIdx--;
  }

  nodesArr[leftIdx].next = null;
};