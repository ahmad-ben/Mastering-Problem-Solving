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

  let nodesArr = [root];

  while(nodesArr.length){
    let currentNode = nodesArr.pop();

    let rightPart = currentNode.right;

    currentNode.right = currentNode.left;
    currentNode.left = rightPart;

    if(currentNode.right) nodesArr.push(currentNode.right);
    if(currentNode.left) nodesArr.push(currentNode.left);
  };

  return root;
};