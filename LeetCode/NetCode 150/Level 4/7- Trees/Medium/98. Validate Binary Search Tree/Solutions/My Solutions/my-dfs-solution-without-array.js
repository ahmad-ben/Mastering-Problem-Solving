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

  const inOrderDfs = (currNode, maxVal, minVal) => {
    if(!currNode) return true;

    if(currNode.val < maxVal && currNode.val > minVal) 
      return (
        inOrderDfs(currNode.left, currNode.val, minVal) && 
        inOrderDfs(currNode.right, maxVal, currNode.val)
      );
    
    return false;
  };

  return inOrderDfs(root, Infinity, -Infinity);
};