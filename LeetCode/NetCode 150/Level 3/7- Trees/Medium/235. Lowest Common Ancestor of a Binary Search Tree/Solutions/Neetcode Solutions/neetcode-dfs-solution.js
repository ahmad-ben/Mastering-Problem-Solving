const lowestCommonAncestor = (root, p, q) => {
  if (!root || !p || !q) return null;

  if (Math.max(p.val, q.val) < root.val) 
    return lowestCommonAncestor(root.left, p, q);

  if (Math.min(p.val, q.val) > root.val) 
    return lowestCommonAncestor(root.right, p, q);

  return root;
}