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

  // Create the space between the tail and the node before the deleted. 
  for(i = 1; i < n; i++) currentEnd = currentEnd.next;
  
  // Preserve the space by moving the 2 pointers until the end.
  while(currentEnd.next){
    if(!beforeRemovedNode) beforeRemovedNode = head;
    else beforeRemovedNode = beforeRemovedNode.next;

    currentEnd = currentEnd.next;
  }

  // If the node before the deleted one dons't exist that means we want to delete the head node.   
  if(!beforeRemovedNode) head = head.next;
  // We just make the node before the deleted points to the node after the deleted.
  // 1 -> 2 -> 3 => 1 -> 3
  else beforeRemovedNode.next = beforeRemovedNode.next.next;

  return head;
};