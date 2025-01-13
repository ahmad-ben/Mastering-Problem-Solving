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
 * @return {number}
 */
var maxPathSum = function(root) {
  // Initialize the global maximum path sum to a very small value
  let maxVal = -Infinity;

  //Helper function to calculate the maximum path sum at a given node
  const maxValInNode = (currNode) => {
    // Base case: if the node is null, it contributes 0 to the path sum
    if (!currNode) return 0;

    // Get the value of the current node
    const cVal = currNode.val;

    // Recursively calculate the maximum path sum from the left and right subtrees
    const maxLeft = maxValInNode(currNode.left);
    const maxRight = maxValInNode(currNode.right);

    // Calculate the maximum path sum for the current chain (node + one child or no child)
    let maxValInChain = Math.max(maxLeft + cVal, maxRight + cVal, cVal);

    // Update the global maximum path sum by considering:
    // 1. The current maximum path value
    // 1. The current chain's maximum path sum
    // 2. The path that passes through the current node, combining left and right subtrees
    maxVal = Math.max(maxVal, maxValInChain, maxLeft + cVal + maxRight);

    // Return the maximum path sum including the current node to be used by its parent
    return maxValInChain;
  };

  // Start the recursion from the root of the tree
  maxValInNode(root);

  // Return the global maximum path sum
  return maxVal;
};