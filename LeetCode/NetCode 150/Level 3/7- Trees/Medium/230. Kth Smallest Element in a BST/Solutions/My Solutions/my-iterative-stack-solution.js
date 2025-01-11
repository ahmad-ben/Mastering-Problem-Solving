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
  let stack = [], currentNode = root;

  while(true){  
    while(currentNode){
      stack.push(currentNode);
      currentNode = currentNode.left;
    };

    let currSmallest = stack.pop();
    if(k-- === 1) return currSmallest.val; 

    currentNode = currSmallest.right; 
  };
};