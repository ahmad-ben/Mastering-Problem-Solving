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
  if(!root) return true;

  let isBalanced = true;

  const visitNode = (currentNode) => {
    let leftMax = 0, rightMax = 0;

    if(!isBalanced) return isBalanced; 

    if(currentNode.left && isBalanced) 
      leftMax = visitNode(currentNode.left);

    if(currentNode.right && isBalanced)
      rightMax = visitNode(currentNode.right);

    if(Math.abs(leftMax - rightMax) > 1) isBalanced = false;

    return Math.max(leftMax, rightMax) + 1;
  };

  visitNode(root);
  return isBalanced;
};