// Without help 😁.

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
var isBalanced = function(root) {
  let isBalanced = true;

  const isNodeBalanced = (node) => {
    if(!node) return 0;

    // Get the max hright of the portion or false it's already not balanced.
    let leftPortionBalance = isNodeBalanced(node.left);
    let rightPortionBalance = isNodeBalanced(node.right);

    // Check if this node is balanced, if it's not we finish. 
    if(
      !isBalanced || 
      Math.abs(leftPortionBalance - rightPortionBalance) > 1  
    ) return isBalanced = false; 

    return Math.max(leftPortionBalance, rightPortionBalance) + 1;
  };

  isNodeBalanced(root);

  return isBalanced;
};