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
var goodNodes = function(root) {
  let stack = [-10000], goodNodesCounts = 0;

  const isCurrentNodeGood = (currentNode) => {
    if(!currentNode) return null;

    let stackBiggestVal = stack[stack.length - 1];

    if(currentNode.val >= stackBiggestVal){
      stack.push(currentNode.val);
      ++goodNodesCounts;
    };

    isCurrentNodeGood(currentNode.left);
    isCurrentNodeGood(currentNode.right);

    stackBiggestVal = stack[stack.length - 1];

    if(currentNode.val === stackBiggestVal) stack.pop();
  };

  isCurrentNodeGood(root);

  return goodNodesCounts;
};