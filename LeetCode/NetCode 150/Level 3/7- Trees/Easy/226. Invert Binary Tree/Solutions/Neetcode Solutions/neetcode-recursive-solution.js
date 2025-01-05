const invertTree = (root) => {
  if (root === null) return null;

  const node = new TreeNode(root.val);

  node.right = invertTree(root.left);
  node.left = invertTree(root.right);

  return node;
}