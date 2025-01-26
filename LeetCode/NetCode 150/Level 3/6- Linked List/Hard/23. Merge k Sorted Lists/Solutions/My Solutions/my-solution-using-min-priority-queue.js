/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  // Create a dummy head and a dummy tail.
  let head = tail = new ListNode(0, null);

  // We will create a Min Priority Queue.
  let minPQ = new MinPriorityQueue({ priority: (list) => list.val });

  // To hold the current valid head of all lists and sort them also.
  for(let list of lists) if(list) minPQ.enqueue(list);

  // The MPQ has some nodes we didn't add them to out sorted link yet. 
  while(minPQ.size()){
      // extract the smallest node in our PQ:
      const smallestHeadRef = minPQ.dequeue().element;

      // Check the value of the next node after the smaller. 
      const nextNode = smallestHeadRef.next;

      // If the next node exist we should: 
      // Remove the link between the smallest node and the coming one. 
      // Add the coming node to the MPQ for sorting. 
      if(nextNode){
        smallestHeadRef.next = null;
        minPQ.enqueue(nextNode);
      };

      // Make the next tail points to the current smallest node.
      // We are sure that the current smallest node next points to null.
      tail.next = smallestHeadRef;
      // Update the tail reference.
      tail = smallestHeadRef;
  }

  return head.next;
};