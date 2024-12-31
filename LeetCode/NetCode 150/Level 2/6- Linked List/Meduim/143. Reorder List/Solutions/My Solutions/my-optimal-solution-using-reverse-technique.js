/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let totalNodesNum = 0, currentNode = midNode = head, prevNode = null, nextNode;

  // Define the middle node.
  while(currentNode){
      ++totalNodesNum;
      currentNode = currentNode.next;
      // When we move the current node twice that means we should move the middle node by one.
      if(totalNodesNum % 2 === 0) midNode = midNode.next;
  }

  // Apply reverse on the second part of the node.
  currentNode = midNode
  while(currentNode){
      nextNode = currentNode.next;
      currentNode.next = prevNode;

      prevNode = currentNode;
      currentNode = nextNode;
  }

  // Start Reordering, now we have two part, the first one is normal and the second is reversed:
  // For example if we have at origin: 1 -> 2 -> 3 -> 4 -> 5. now we have
  // Ordered part -normal-: 1 -> 2 -> 3 || Reversed part -second part we reversed-: 5 -> 4 -> 3  
  let orderedPartHead = head, orderedPartNextHead, reversedPartHead = prevNode, reversedPartNextHead;

  while(reversedPartHead.next){
      // Preserve the next of both parts to be the head of the following process.
      orderedPartNextHead = orderedPartHead.next;
      reversedPartNextHead = reversedPartHead.next;

      orderedPartHead.next = reversedPartHead;
      reversedPartHead.next = orderedPartNextHead;

      orderedPartHead = orderedPartNextHead;
      reversedPartHead = reversedPartNextHead;
  }
};