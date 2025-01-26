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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let wantedNode; 

  const inOrderTraversal = (currNode) => {
      if(!currNode) return;

      inOrderTraversal(currNode.left);
      if(k-- === 1) return wantedNode = currNode;
      inOrderTraversal(currNode.right);
  };

  inOrderTraversal(root);
  return wantedNode.val;
};