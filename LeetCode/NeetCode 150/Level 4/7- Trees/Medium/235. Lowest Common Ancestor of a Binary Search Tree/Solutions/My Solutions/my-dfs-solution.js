/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  // If p or q is the root that means it's the LCA.
  if(root === p || root === q) return root;

  let lcAncestor;

  const isCurrNodeLCA = (node) => {
      if(!node) return 0;

      let found = 0;

      if(node.val === q.val || node.val === p.val) ++found;

      let checkLeftPart = isCurrNodeLCA(node.left);
      let checkRightPart = isCurrNodeLCA(node.right);

      found = found + checkLeftPart + checkRightPart;

      if(!lcAncestor && found === 2) lcAncestor = node; 

      return found;
  };

  isCurrNodeLCA(root); 

  return lcAncestor;
};