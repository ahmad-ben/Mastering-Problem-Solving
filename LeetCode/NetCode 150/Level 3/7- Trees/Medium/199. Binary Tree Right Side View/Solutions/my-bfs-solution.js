/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Computes the right side view of a binary tree.
 * This means returning the values of the rightmost node at each level of the tree,
 * as seen from a right-side perspective.
 *
 * @param {TreeNode} root
 * @return {number[]}
 */

var rightSideView = function(root) {
  // Edge case: If the tree is empty, return an empty array.
  if (!root) return [];

  // Initialize a queue for BFS traversal and an array to store the result.
  let queue = new Queue(), rightSideNodes = []; // Array to store the rightmost nodes at each level.

  // Enqueue the root node to start the traversal.
  queue.enqueue(root);

  // Perform a level-order traversal using a queue.
  while (!queue.isEmpty()) {
    // Determine the number of nodes at the current level.
    let queueSize = queue.size();

    // Iterate through all nodes at this level.
    while (queueSize--) {
      // Dequeue the current node.
      let node = queue.dequeue();

      // If this is the last node in the current level, add its value to the result array.
      if (!queueSize) rightSideNodes.push(node.val);

      // Enqueue the left and right children (if they exist) for the next level.
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
  }

  // Return the array containing the rightmost nodes at each level.
  return rightSideNodes;
};