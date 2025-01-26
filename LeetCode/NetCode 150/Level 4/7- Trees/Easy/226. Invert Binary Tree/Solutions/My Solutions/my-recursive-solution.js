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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(!root) return root;

  const invertLevel = (node) => {
      // If the node has no children, it's a leaf.
      if(!node.left && !node.right) return node;

      // Invert the whole right part to assign it to the left pointer latter on.  
      const invertRightChildLevel = node.right ? invertLevel(node.right) : null;
      // Invert the whole left part to assign it to the right pointer.  
      node.right = node.left ? invertLevel(node.left) : null;

      // Assign the whole inverted right part to the left pointer.  
      node.left = invertRightChildLevel;

      // Return the reverted node.
      return node;
  };

  return invertLevel(root);
};