/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
  let currentNode = head, newHead = newTail = new _Node(0, null, null);

  while(currentNode){
    const newNode = new _Node(currentNode.val, null, currentNode.random);
    newTail.next = newNode;
    currentNode.val = newNode;

    currentNode = currentNode.next;
    newTail = newNode;
  }

  currentNode = newHead;
  while(currentNode){
    currentNode.random = currentNode.random ? currentNode.random.val : null;
    currentNode = currentNode.next;
  };

  return newHead.next;
  
};