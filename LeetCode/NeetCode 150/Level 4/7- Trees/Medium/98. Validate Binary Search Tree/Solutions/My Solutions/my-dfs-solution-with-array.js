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
 * @return {boolean}
 */

var isValidBST = function(root) {
  // Array to store the in-order traversal of the tree
  let inOrderTree = [];

  // Recursive function to perform in-order traversal
  const inOrderDfs = (currNode) => {
    // Base case: Null nodes are skipped
    if (!currNode) return;

    inOrderDfs(currNode.left);       // Visit the left subtree
    inOrderTree.push(currNode.val);  // Add the current node value to the array
    inOrderDfs(currNode.right);      // Visit the right subtree
  };

  // Perform in-order traversal starting from the root
  inOrderDfs(root);

  // Check if the in-order traversal array is sorted in strictly ascending order
  for (let i = 0; i < inOrderTree.length - 1; i++) 
    if (inOrderTree[i] >= inOrderTree[i + 1]) return false; // Not a valid BST

  return true; // The tree is a valid BST
};
