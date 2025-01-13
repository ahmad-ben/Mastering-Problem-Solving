const maxPathSum = (root) => {
  const res = [root.val];
  dfs(root, res);
  return res[0];
}

const dfs = (root, res) => {
  if (root === null) return 0;

  const leftMax = Math.max(dfs(root.left, res), 0);
  const rightMax = Math.max(dfs(root.right, res), 0);

  res[0] = Math.max(res[0], root.val + leftMax + rightMax);

  return root.val + Math.max(leftMax, rightMax);
};