// Saw the general idea from Netcode solution video.
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
  // Start from the root node and traverse the tree.
  let currNode = root;

  while (true) {
    // If both p and q are smaller than the current node.
    // the LCA must be in the left subtree.
    if (currNode.val > q.val && currNode.val > p.val) currNode = currNode.left;

    // If both p and q are larger than the current node.
    // the LCA must be in the right subtree.
    else if (currNode.val < q.val && currNode.val < p.val) currNode = currNode.right;

    // If the current node is between p and q or equal to either of them.
    // the current node is their lowest common ancestor.
    else return currNode;
  }
};