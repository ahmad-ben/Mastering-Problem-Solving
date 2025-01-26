/**
 * Reverses a group of nodes in the linked list.
 * @param {ListNode} head - The head of the linked list.
 * @param {ListNode} prevGroupTail - The tail node of the previous group, used to link reversed groups.
 * @param {ListNode} nextGroupHead - The head of the next group to reverse, acts as the stopping point for the current group.
 * @return {ListNode} - The new tail of the reversed group.
 */
const reverseGroup = (head, prevGroupTail, nextGroupHead) => {
  let prevNode = nextGroupHead, // Start with the next group's head as the previous node.
      currentNode = prevGroupTail ? prevGroupTail.next : head, // Start reversing from the group's first node.
      nextNode; // Pointer to temporarily hold the next node during the reversal.

  const newGroupTail = currentNode; // The group's first node becomes the new tail after reversal.

  // Reverse the current group until reaching the stopping point (nextGroupHead).
  while (currentNode !== nextGroupHead) {
    nextNode = currentNode.next; // Save the next node before breaking the link.
    currentNode.next = prevNode; // Reverse the link direction.
    prevNode = currentNode; // Move the previous pointer forward.
    currentNode = nextNode; // Move the current pointer forward.
  }

  // Connect the previous group's tail to the current group's new head (prevNode).
  if (prevGroupTail) prevGroupTail.next = prevNode;

  return newGroupTail; // Return the new tail of the current group.
};

/**
* Reverses every k nodes in the linked list.
* @param {ListNode} head - The head of the linked list.
* @param {number} k - The size of groups to reverse.
* @return {ListNode} - The head of the modified linked list.
*/
var reverseKGroup = function(head, k) {
  if (k === 1) return head; // No reversal needed for k=1.

  let currentNode = head, // Pointer to traverse the list.
      newHead, // The new head of the list after reversal.
      prevGroupTail, // The tail node of the previous group, used for linking.
      nodesNumber = 0; // Counter to keep track of nodes in the current group.

  while (currentNode) {
      ++nodesNumber; // Increment the node count for the current group.

      // If the group is complete (nodesNumber === k), perform reversal.
      if (nodesNumber === k) {
          // Set the new head of the list after reversing the first group.
          if (!newHead) newHead = currentNode;

          // Save the next node to process after reversal.
          let newCurrentNode = currentNode.next;

          // Reverse the current group and update prevGroupTail to the new tail.
          prevGroupTail = reverseGroup(head, prevGroupTail, newCurrentNode);

          // Reset the node counter for the next group.
          nodesNumber = 0;

          // Move the currentNode pointer to the next node after the reversed group.
          currentNode = newCurrentNode;
      } else {
          currentNode = currentNode.next; // Move to the next node if the group isn't full yet.
      }
  }

  return newHead; // Return the new head of the reversed list.
};
