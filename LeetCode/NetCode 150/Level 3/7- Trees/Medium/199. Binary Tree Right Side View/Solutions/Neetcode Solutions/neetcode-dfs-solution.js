const rightSideView = (root) => {
  let res = [];

  const dfs = (node, depth) => {
    if (!node) return;

    if (res.length === depth) res.push(node.val);

    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  }

  dfs(root, 0);

  return res;
};