/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let beforeRemovedNode = null, currentEnd = head;

  for(i = 1; i < n; i++) currentEnd = currentEnd.next;
  
  // We assume the the current node is the last node.
  while(currentEnd.next){
    if(!beforeRemovedNode) beforeRemovedNode = head;
    else beforeRemovedNode = beforeRemovedNode.next;

    currentEnd = currentEnd.next;
  }

  let removedNode = beforeRemovedNode?.next;
  if(beforeRemovedNode){
    beforeRemovedNode.next = removedNode.next;
    removedNode.next = null;
  }else{
    const oldHead = head;
    head = head.next;
    oldHead.next = null
  }

  return head;
};