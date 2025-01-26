/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
  // Edge case: If the tree is empty, return an empty array.
  if (!root) return [];

  // Initialize a queue to hold nodes to process, starting with the root.
  let queue = new Queue();
  // `size` keeps track of the number of nodes at the current level.
  let size = 1;
  // `outputArr` will store the level-order traversal as a 2D array.
  let outputArr = [];

  // Enqueue the root node to begin the traversal.
  queue.enqueue(root);

  // Process nodes level by level.
  while (queue.size()) {
      let subArr = []; // To store the values of nodes at the current level.

      // Process all nodes at the current level.
      for (let i = 0; i < size; i++) {
          const node = queue.dequeue(); // Remove a node from the queue.

          // Add the node's children to the queue for the next level.
          if (node.left) queue.enqueue(node.left);
          if (node.right) queue.enqueue(node.right);

          // Add the current node's value to the level array.
          subArr.push(node.val);
      }

      // Update the `size` to the number of nodes at the next level.
      size = queue.size();

      // Append the current level's values to the output array.
      outputArr.push(subArr);
  }

  // Return the final 2D array of level-order values.
  return outputArr;
};
