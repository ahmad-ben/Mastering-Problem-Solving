var isSameTree = function(fTree, sTree) {

  // Recursive function to compare two nodes and their subtrees. 
  const isChildrenSame = (fTreeNode, sTreeNode) => {
      // Base case: Both nodes are null, so they are identical.
      if (!fTreeNode && !sTreeNode) return true;

      // If only one of the nodes is null, the trees are not identical.
      if (!fTreeNode || !sTreeNode) return false;

      // Check if: 
      // The current nodes have the same value.
      // The left and right subtrees are identical.
      if (
          fTreeNode.val === sTreeNode.val &&
          isChildrenSame(fTreeNode.left, sTreeNode.left) && // Compare left subtrees.
          isChildrenSame(fTreeNode.right, sTreeNode.right) // Compare right subtrees.
      ) return true;

      // If any of the conditions fail, the trees are not identical.
      return false;
  };

  // Start the comparison from the root nodes of both trees.
  return isChildrenSame(fTree, sTree);
};