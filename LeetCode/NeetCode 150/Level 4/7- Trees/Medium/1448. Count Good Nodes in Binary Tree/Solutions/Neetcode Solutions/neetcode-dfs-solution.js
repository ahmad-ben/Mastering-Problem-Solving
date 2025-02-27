const goodNodes = (root) => dfs(root, root.val);

const dfs = (currNode, maxVal) => {
  if (!currNode) return 0;

  let res = currNode.val >= maxVal ? 1 : 0;

  maxVal = Math.max(maxVal, currNode.val);

  res += dfs(currNode.left, maxVal);
  res += dfs(currNode.right, maxVal);

  return res;
};