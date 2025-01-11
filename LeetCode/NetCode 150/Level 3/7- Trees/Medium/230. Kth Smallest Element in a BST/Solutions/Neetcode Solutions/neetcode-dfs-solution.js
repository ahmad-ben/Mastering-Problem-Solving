const kthSmallest = (root, k) => {
  const tmp = new Int32Array(2); // LATER
  tmp[0] = k;
  dfs(root, tmp);
  return tmp[1];
}

const dfs = (node, tmp) => {
  if (!node) return;

  dfs(node.left, tmp);

  tmp[0]--;

  if (tmp[0] === 0) return tmp[1] = node.val;

  dfs(node.right, tmp);
};