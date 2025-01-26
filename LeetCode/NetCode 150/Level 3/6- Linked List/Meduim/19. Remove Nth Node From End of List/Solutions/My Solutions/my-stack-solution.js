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
  const stack = []; 

  let currNode = head;

  while(currNode){
    stack.push(currNode);
    currNode = currNode.next;
  }

  let removedNode = stack[stack.length - n]; // Can we delete this?
  let beforeRemovedNode = stack[stack.length - n - 1];

  if(beforeRemovedNode) beforeRemovedNode.next = removedNode.next;
  else head = head.next;

  removedNode.next = null;

  return head;
};