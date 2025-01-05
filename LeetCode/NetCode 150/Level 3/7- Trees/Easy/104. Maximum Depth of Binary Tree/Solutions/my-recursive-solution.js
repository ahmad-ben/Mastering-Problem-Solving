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
var maxDepth = function(root) {
  if(!root) return 0;
  
  let maxDepthVal = currentDepthVal = 0;

  const countLevel = (node) => {
    // There is no node in this level so for this part we achieve the max.
    if(!node) return maxDepthVal = Math.max(maxDepthVal, currentDepthVal);

    // Since we have a node in this level increment the depth value.
    ++currentDepthVal;
    countLevel(node.left);
    countLevel(node.right);
    
    // We finish all the nodes children of the current node. 
    // We will return back to the node's parent, so decrement the value of the depth.
    --currentDepthVal;
  };

  countLevel(root);

  return maxDepthVal;
};