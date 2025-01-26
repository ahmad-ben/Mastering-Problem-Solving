/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let fastPointerNode = head, slowPointerNode = head, fastMoves = 0;

  while(fastPointerNode){
    fastPointerNode = fastPointerNode.next;
    ++fastMoves;
    if(fastPointerNode === slowPointerNode) return true;
    if(fastMoves % 2 === 0) slowPointerNode = slowPointerNode.next;
  }

  return false;
};