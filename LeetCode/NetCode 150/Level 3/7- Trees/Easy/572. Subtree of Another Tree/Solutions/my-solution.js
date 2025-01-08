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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

/*
  we have 2 tree:
    Long.
    Short.
  we have 3 cases:
    The current nodes are equal:
      Compare between the right and the left of them.
    The current nodes are not equal:
      If we are still in the root of the Short:
        Make 2 comparisons:
          The Current Long Node Left Child with the Short Tree. 
          The Current Long Node Right Child with the Short Tree. 
        If we are not in the root of the Short:
          Make 2 comparisons:
            The Current Root Long Node Left Child with the Short Tree. 
            The Current Root Long Node Right Child with the Short Tree.                  
*/

var isSubtree = function(root, subRoot) {
  const isLevelTheSame = (currentRote, longTreeNode, shortTreeNode) => {
    if(!longTreeNode && !shortTreeNode) return true;

    if(!longTreeNode || !shortTreeNode) return false;

    if(longTreeNode.val !== shortTreeNode.val) {
      if(shortTreeNode === subRoot) return isLevelTheSame(longTreeNode.left, longTreeNode.left, subRoot) ||
        isLevelTheSame(longTreeNode.right, longTreeNode.right, subRoot);

      return isLevelTheSame(currentRote.left, currentRote.left, subRoot) ||
        isLevelTheSame(currentRote.right, currentRote.right, subRoot);
    }; 

    const isLeftPartSame = isLevelTheSame(currentRote, longTreeNode.left, shortTreeNode.left);

    if(!isLeftPartSame)
      return isLevelTheSame(currentRote.left, currentRote.left, subRoot) || 
        isLevelTheSame(currentRote.right, currentRote.right, subRoot);
    

    const isRightPartSame = isLevelTheSame(currentRote, longTreeNode.right, shortTreeNode.right);

    if(!isRightPartSame) 
      return isLevelTheSame(currentRote.left, currentRote.left, subRoot) ||
        isLevelTheSame(currentRote.right, currentRote.right, subRoot);

    return true;
  }
  
  return isLevelTheSame(root, root, subRoot);
};